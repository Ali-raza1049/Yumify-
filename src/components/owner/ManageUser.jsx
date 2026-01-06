import React from "react";
import { ArrowLeft, Search, Filter, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {Cardstats,users} from "../../data/Data"

const ManageUser = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
    
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          <ArrowLeft />
        </button>
        <h1 className="text-2xl font-semibold">User Management</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Cardstats.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl border p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <h2 className="text-2xl font-bold mt-1">{s.value}</h2>
              {s.change && (
                <p className="text-sm text-green-600 mt-1">{s.change}</p>
              )}
            </div>
            <div className={`w-10 h-10 rounded-lg ${s.color}`} />
          </div>
        ))}
      </div>

      
      <div className="bg-white p-4 rounded-xl border flex flex-col lg:flex-row gap-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 flex-1">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            placeholder="Search users by name or email..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <select className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
          <option>All Roles</option>
          <option>Customer</option>
          <option>Vendor</option>
        </select>

        <select className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
      </div>

      
      <div className="bg-white rounded-xl border p-4 space-y-4">
        <h2 className="font-semibold">All Users (5)</h2>

        {users.map((u) => (
          <div
            key={u.email}
            className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                {u.name[0]}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{u.name}</p>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    {u.role}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {u.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{u.email}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <span>{u.phone}</span>
              <span>Joined {u.joined}</span>
              <span>{u.orders}</span>
            </div>

            <button className="p-2 hover:bg-gray-200 rounded-lg">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
