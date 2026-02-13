import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";

export const getActiveRestaurants = createAsyncThunk(
  "restaurant/getActiveRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/restaurants/restaurants"); // public route
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch restaurants"
      );
    }
  }
);

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API.get(`/restaurants/restaurants/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch restaurant"
      );
    }
  }
);


export const getOwnerRestaurants = createAsyncThunk(
  "restaurant/getOwnerRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/restaurants/owner/restaurants");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch owner restaurants"
      );
    }
  }
);

export const addOwnerRestaurant = createAsyncThunk(
  "restaurant/addOwnerRestaurant",
  async (formData, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) data.append(key, value);
      });

      const res = await API.post("/restaurants/owner/restaurants", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data; 
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to add restaurant"
      );
    }
  }
);

export const deleteOwnerRestaurant = createAsyncThunk(
  "restaurant/deleteOwnerRestaurant",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`/restaurants/owner/restaurants/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to delete restaurant"
      );
    }
  }
);

export const getPendingRestaurants = createAsyncThunk(
  "restaurant/getPendingRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/restaurants/admin/restaurants/pending");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch pending restaurants"
      );
    }
  }
);


export const activateRestaurant = createAsyncThunk(
  "restaurant/activateRestaurant",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API.patch(`/restaurants/admin/restaurants/${id}/activate`);
      return res.data.restaurant;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to activate restaurant"
      );
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],          
    pendingRestaurants: [],    
    selectedRestaurant: null,
    loading: false,
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
      .addCase(getActiveRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getActiveRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(getActiveRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getRestaurantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRestaurant = action.payload;
      })
      .addCase(getRestaurantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getOwnerRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOwnerRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(getOwnerRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(addOwnerRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOwnerRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants.push(action.payload);
      })
      .addCase(addOwnerRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteOwnerRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOwnerRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = state.restaurants.filter(
          (r) => r._id !== action.payload
        );
      })
      .addCase(deleteOwnerRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(getPendingRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPendingRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingRestaurants = action.payload;
      })
      .addCase(getPendingRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(activateRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(activateRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        // remove from pending and optionally add to active list
        state.pendingRestaurants = state.pendingRestaurants.filter(
          (r) => r._id !== action.payload._id
        );
      })
      .addCase(activateRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSelectedRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
