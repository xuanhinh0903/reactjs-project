import { combineSlices, configureStore } from '@reduxjs/toolkit'

import counterSlice from '../features/count/count.slice'

const rootReducer = combineSlices({
  counter: counterSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch