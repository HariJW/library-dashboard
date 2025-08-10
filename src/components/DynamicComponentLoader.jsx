import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchJSON } from "../services/dataService";
import Card from "./Card";
import Table from "./Table";
import Chart from "./Chart";
import Loader from "./Loader";

export default function DynamicComponentLoader() {
  const [components, setComponents] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setComponents(null);
      setError(null);
      try {
        const nav = await fetchJSON("./data/navigation.json");
        const current = nav.find((item) => item.path === location.pathname);
        if (!current) {
          setComponents([]);
          return;
        }
        const loaded = await Promise.all(
          current.components.map(async (comp) => {
            const data = await fetchJSON(comp.dataUrl);
            return { ...comp, data };
          })
        );
        if (!cancelled) setComponents(loaded);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!components) return <Loader />;
  if (components.length === 0)
    return <div className="p-4">No components configured for this path.</div>;

  const cards = components.filter((c) => c.type === "Card");
  const otherComponents = components.filter((c) => c.type !== "Card");

  return (
    <div className="space-y-4 sm:space-y-6">
      {cards.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((c, idx) => (
            <Card key={idx} {...c.data} />
          ))}
        </div>
      )}

      <div className="space-y-4">
        {otherComponents.map((c, idx) => {
          switch (c.type) {
            case "Table":
              return <Table key={idx} {...c.data} />;
            case "Chart":
              return <Chart key={idx} chartData={c.data} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
