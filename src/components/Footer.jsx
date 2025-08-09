export default function Footer() {
  return (
    <footer className="bg-gray-100 p-3 fixed left-0 right-0 bottom-0 text-center">
      © {new Date().getFullYear()} Library Dashboard
    </footer>
  )
}