import { IMAGE_BASE_URL } from "../../utils/Config";

const StatusBadge = ({ status }) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  let styles = "bg-gray-100 text-gray-700"; // default
  if (status === "Active") styles = "bg-green-100 text-green-700";
  else if (status === "Pending") styles = "bg-yellow-100 text-yellow-800";
  else if (status === "Rejected") styles = "bg-red-100 text-red-700";

  return <span className={`${base} ${styles}`}>{status}</span>;
};

const RestaurantTable = ({ restaurants = [], onDelete }) => {
  if (!restaurants.length) {
    return (
      <div className="bg-white rounded-xl shadow border p-6 text-center text-gray-500">
        No restaurants available
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow border">
      <div className="p-4 border-b">
        <h2 className="font-semibold">All Restaurants</h2>
        <p className="text-sm text-gray-500">List of all restaurants</p>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Restaurant</th>
            <th className="px-4 py-3 text-left">Address</th>
            <th className="px-4 py-3 text-left">Cuisine</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Orders</th>
            <th className="px-4 py-3 text-left">Revenue</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {restaurants.map((r) => (
            <tr key={r._id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-4 flex items-center gap-3">
                {r.image ? (
                  <img
                    src={`${IMAGE_BASE_URL}${r.image}`}
                    className="w-10 h-10 rounded-lg object-cover"
                    alt={r.name}
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    🍽️
                  </div>
                )}
                <span className="font-medium">{r.name}</span>
              </td>

              <td className="px-4 py-4">{r.address}</td>
              <td className="px-4 py-4">{r.cuisine}</td>
              <td className="px-4 py-4">
                <StatusBadge status={r.status} />
              </td>
              <td className="px-4 py-4">{r.orders}</td>
              <td className="px-4 py-4">{r.revenue}</td>
              <td className="px-4 py-4 text-right">
                <button
                  onClick={() => onDelete(r._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantTable;
