import DynamicComponentLoader from "../components/DynamicComponentLoader";
export default function DashboardPage() {
  return (
    <div className="px-2 sm:px-4">
      <DynamicComponentLoader />
    </div>
  );
}
