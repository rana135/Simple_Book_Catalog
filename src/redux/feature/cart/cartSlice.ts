/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
    products: any[];
  }
  
  const initialState: ICart = {
    products: [],
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const existing = state.products.find(
              (product) => product._id === action.payload._id
            );
      
            if (existing) {
              existing.quantity = existing.quantity! + 1;
            } else {
              state.products.push({ ...action.payload, quantity: 1 });
            }
      
    
          },
          removeOne: (state, action: PayloadAction<any>) => {
            const existing = state.products.find(
              (product) => product._id === action.payload._id
            );
      
            if (existing && existing.quantity! > 1) {
              existing.quantity = existing.quantity! - 1;
            } else {
              state.products = state.products.filter(
                (product) => product._id !== action.payload._id
              );
            }
      
          },
 
           
    }
})

export const { addToCart, removeOne } = cartSlice.actions; 
export default cartSlice.reducer;