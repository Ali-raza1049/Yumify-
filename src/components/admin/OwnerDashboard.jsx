import {
  Utensils,
  ClipboardList,
  UserCog,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { weeklyOrders, Cards, monthlyRevenue } from "../../data/Data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slice/AuthSlice";


export function OwnerDashboard(){  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleLogout = () => 
    {
      dispatch(logout());
      navigate("/signin");
    };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Owner Dashboard</h1>
        <button className="px-4 py-2 rounded-xl border hover:bg-gray-100"
        onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {Cards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-2xl border p-5 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-green-600 text-sm">{stat.growth}</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-800">
              <stat.icon className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Link
          to="/admin/manage-pending-restaurant"
          className="flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600"
        >
          <Utensils size={18} />
          Manage Pending Restaurant
        </Link>

        <Link
          to="/admin/manage-order"
          className="flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-100"
        >
          <ClipboardList size={18} />
          View All Orders
        </Link>

        <Link
          to="/admin/manage-user"
          className="flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-100"
        >
          <UserCog size={18} />
          Manage Users
        </Link>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Orders */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Weekly Orders</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyOrders}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Monthly Revenue</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenue}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="revenue"
                  fill="#f97316"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;
