import { configureStore } from "@reduxjs/toolkit";
import { api } from "./feature/api/apiSlice";
import userReducer from "./feature/user/userSlice";
import cartReducer from "./feature/cart/cartSlice";
import reviewReducer from "./feature/review/reviewSlice";


export const store = configureStore({
  reducer: {
    user: userReducer, 
    cart: cartReducer, 
    review: reviewReducer, 
    [api.reducerPath]: api.reducer   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;