import { authApi } from '@/app/api/apiSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from '@/auth/reducers/user/userSlice';
import progressReducer from '@/redux/reducers/progressReducer';
import themeReducer from '@/redux/reducers/themeReducer';
// import usersReducer from '@/auth/reducers/users/usersSlice';
import authReducer from '@/auth/reducers/login/loginSlice';
import usersFilterReducer from '@/components/profile/friends/userFilterSlice';
import searchQueryReducer from '@/components/profile/friends/searchQuerySlice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  theme: themeReducer,
  // users: usersReducer,
  query: searchQueryReducer,
  progress: progressReducer,
  usersFilter: usersFilterReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
