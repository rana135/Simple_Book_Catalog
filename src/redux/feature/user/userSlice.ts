/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import app from "../../../firebase/firebase";

export const auth = getAuth(app)

interface IUserState {
    user: {
      user: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      email: string | null;
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null;
  }
  
  interface ICredential {
    email: string;
    password: string;
}

const initialState: IUserState = {
    user: {
        email: null,
        user: undefined
    },
    isLoading: false,
    isError: false,
    error: null,
}

export const createUser = createAsyncThunk(
    'user/createUser',
  async ({email, password} : ICredential ) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email;
  }
)


export const logOut = createAsyncThunk(
    'user/logOut',
    async ( ) => { 
        return signOut(auth)  
    }
) 
    

export const loginUser = createAsyncThunk(
    'user/loginUser',
  async ({email, password} : ICredential ) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string | null>) => {
            state.user.email = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
        }).addCase(createUser.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
        }).addCase(createUser.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message!
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
        }).addCase(loginUser.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message!
        })

    }
})

export const { setUser, setLoading } = userSlice.actions; 

export default userSlice.reducer 