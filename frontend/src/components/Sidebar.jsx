import { LayoutDashboard, Clock, CheckCircle2 } from "lucide-react";

const Sidebar = ({ activeStatus, setActiveStatus, tasks, isOpen, onClose }) => {
  const pending = tasks.filter(t => t.status === "pending").length;
  const inProgress = tasks.filter(t => t.status === "in-progress").length;
  const completed = tasks.filter(t => t.status === "completed").length;

  const statuses = [
    { key: "all", label: "All Tasks", icon: <LayoutDashboard size={18} />, count: tasks.length },
    { key: "pending", label: "Pending", icon: <Clock size={18} />, count: pending },
    { key: "inProgress", label: "In Progress", icon: <Clock size={18} />, count: inProgress },
    { key: "completed", label: "Completed", icon: <CheckCircle2 size={18} />, count: completed },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:relative z-50 w-64 bg-white shadow-md min-h-[calc(100vh-64px)] transform md:translate-x-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase">
            Menu
          </h2>

          <nav className="space-y-2">
            {statuses.map(status => (
              <button
                key={status.key}
                onClick={() => {
                  setActiveStatus(status.key);
                  onClose && onClose(); // Close on mobile
                }}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeStatus === status.key
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {status.icon}
                    {status.label}
                  </div>
                  <span className="text-xs font-semibold bg-white text-black px-2 py-1 rounded-full">
                    {status.count}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
