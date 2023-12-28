/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IReview {
    review: any[];
  }
  
  const initialState: IReview = {
    review: [],
  };

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
          addToComment: (state, action: PayloadAction<any>) => {
            const existing = state.review.find(
              (review) => review.email === action.payload.email
            );
      
            if (existing) {
              existing.quantity = existing.quantity! + 1;
            } else {
              state.review.push({ ...action.payload, quantity: 1 });
            }
          },
          removeComment: (state, action: PayloadAction<any>) => {
            const existing = state.review.find(
              (review) => review.email === action.payload.email
            );
      
            if (existing && existing.quantity! > 1) {
              existing.quantity = existing.quantity! - 1;
            } else {
              state.review = state.review.filter(
                (review) => review.email! !== action.payload.email
              );
            }
      
          },
    }
})

export const { addToComment, removeComment } = reviewSlice.actions; 
export default reviewSlice.reducer;