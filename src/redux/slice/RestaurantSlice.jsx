// redux/slices/restaurantSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/restaurants");
      return res.data; // array of restaurants
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch restaurants");
    }
  }
);


export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API.get(`/restaurants/${id}`);
      return res.data; // single restaurant
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch restaurant");
    }
  }
);


export const addRestaurant = createAsyncThunk(
  "restaurant/addRestaurant",
  async (formData, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) data.append(key, value);
        else data.append(key, value);
      });

      const res = await API.post("/restaurants", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to add restaurant");
    }
  }
);

export const deleteRestaurant = createAsyncThunk(
  "restaurant/deleteRestaurant",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`/restaurants/${id}`);
      return id; // return deleted ID
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to delete restaurant");
    }
  }
);
// 
const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
    selectedRestaurant: null,
    loadingFetch: false,
    loadingAdd: false,
    loadingDelete: false,
    loadingDetail: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedRestaurant: (state) => {
      state.selectedRestaurant = null;
    },
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.loadingFetch = false;
        state.restaurants = action.payload;
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.payload;
      });

    builder
      .addCase(getRestaurantById.pending, (state) => {
        state.loadingDetail = true;
        state.error = null;
      })
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.selectedRestaurant = action.payload;
      })
      .addCase(getRestaurantById.rejected, (state, action) => {
        state.loadingDetail = false;
        state.error = action.payload;
      });

    builder
      .addCase(addRestaurant.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.loadingAdd = false;
        state.restaurants.push(action.payload);
      })
      .addCase(addRestaurant.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteRestaurant.pending, (state) => {
        state.loadingDelete = true;
        state.error = null;
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.loadingDelete = false;
        state.restaurants = state.restaurants.filter(
          (r) => r._id !== action.payload
        );
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.loadingDelete = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSelectedRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;

