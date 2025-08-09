export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t p-3 fixed left-0 right-0 bottom-0 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Library Dashboard
    </footer>
  );
}
