import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrayThunks = [fetchUsers];

const getActions = (type) => isAnyOf(...arrayThunks.map((thunk) => thunk[type]));

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGet = (state, action) => {
  state.items = [...state.items, ...action.payload];
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    clearUsers: (state) => {
      state.items = [];
    },
    increaseFollowers: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers += 1;
        fetch(`https://64662d7d228bd07b355dffa9.mockapi.io/users/${itemId}`, {
          method: "PUT", 
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ followers: item.followers }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Error");
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
    decreaseFollowers: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers -= 1;
        fetch(`https://64662d7d228bd07b355dffa9.mockapi.io/users/${itemId}`, {
          method: "PUT", 
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ followers: item.followers }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Error");
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
  },
  extraReducers: (builder) => {
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilledGet)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected)
      .addMatcher(getActions(FULFILLED), handleFulfilled);
  },
});

export const { increaseFollowers, decreaseFollowers, clearUsers } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
