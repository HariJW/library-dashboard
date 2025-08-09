export default function Header({ onMenuClick }) {
  return (
    <header className="bg-sky-600 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <button
          className="lg:hidden p-1 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="font-semibold text-lg sm:text-xl">
          Library Dashboard
        </div>

        <div className="w-8 lg:hidden"></div>
      </div>
    </header>
  );
}
