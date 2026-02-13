import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";


export const getMenuItems = createAsyncThunk(
  "menu/getMenuItems",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const res = await API.get(
        `/menu-items/public?restaurant=${restaurantId}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch menu items"
      );
    }
  }
);

export const getOwnerMenuItems = createAsyncThunk(
  "menu/getOwnerMenuItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/menu-items/owner");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch owner menu items"
      );
    }
  }
);


export const addMenuItem = createAsyncThunk(
  "menu/addMenuItem",
  async (formData, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) data.append(key, value);
        else data.append(key, value);
      });

      const res = await API.post("/menu-items", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to add menu item");
    }
  }
);


export const updateMenuItem = createAsyncThunk(
  "menu/updateMenuItem",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) data.append(key, value);
        else data.append(key, value);
      });

      const res = await API.put(`/menu-items/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to update menu item");
    }
  }
);


export const deleteMenuItem = createAsyncThunk(
  "menu/deleteMenuItem",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`/menu-items/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to delete menu item");
    }
  }
);


const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems: [],        
    selectedItem: null,
    loading: false,       
    error: null,
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(getMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItems = action.payload;
      })
      .addCase(getMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


    builder
      .addCase(addMenuItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItems.push(action.payload);
      })
      .addCase(addMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    
    builder
      .addCase(updateMenuItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItems = state.menuItems.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    
    builder
      .addCase(deleteMenuItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItems = state.menuItems.filter((item) => item._id !== action.payload);
      })
      .addCase(deleteMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedItem, clearSelectedItem, clearError } = menuSlice.actions;
export default menuSlice.reducer;
