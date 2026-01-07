import { Bell, Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={toggleSidebar}>
            <Menu size={20} />
          </button>

          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            🗂️ iTask
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              R
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              Rohitashwa
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
