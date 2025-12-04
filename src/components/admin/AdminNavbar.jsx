import { Search, Bell, MessageCircle } from "lucide-react";

export function AdminNavbar() {
  return (
    <div className="sticky top-0 z-50 bg-white w-full px-4 py-3 flex items-center justify-between gap-4 shadow-sm">
      
      {/* Search Bar */}
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search orders, customers, items..."
          className="w-full p-3 pl-10 rounded-xl bg-gray-50 shadow-md outline-none"
        />
        <Search className="absolute left-3 top-3 text-gray-500" size={20} />
      </div>

      {/* Notification & Message Icons */}
      <div className="flex items-center gap-4 shrink-0">
        
        {/* Notifications */}
        <div className="relative">
          <Bell size={22} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
        </div>

        {/* Messages */}
        <div className="relative">
          <MessageCircle size={22} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></span>
        </div>

      </div>
    </div>
  );
}

export default AdminNavbar;
