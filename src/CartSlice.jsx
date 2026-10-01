import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        // increase
        if (existingItem) {
            existingItem.quantity += 1;
        // else decrease
        } else  {
            existingItem.quantity -= 1;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
