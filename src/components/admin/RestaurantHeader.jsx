const RestaurantHeader = ({ onAdd }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Restaurant Management</h1>
        <p className="text-sm text-gray-500">
          Manage all restaurants in one place
        </p>
      </div>

      <button
        onClick={onAdd}
        className="bg-black text-white px-4 py-2 rounded-lg text-sm"
      >
        + Add Restaurant
      </button>
    </div>
  );
};

export default RestaurantHeader;
