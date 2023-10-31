import { configureStore } from '@reduxjs/toolkit'
// import your slices
import productSlice  from './slices/product/product-slice'

export const store = configureStore({
  reducer: {
    productslice:productSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch