import { configureStore } from "@redux/toolkit";
import authReducer from './auth-slice'


const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;