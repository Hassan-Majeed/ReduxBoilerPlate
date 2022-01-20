import { createStore } from "redux";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());   // this store work as a global for whole project //

export default store;