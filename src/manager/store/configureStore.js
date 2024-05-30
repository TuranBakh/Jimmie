// import { createStore } from "redux";
// import { blogReducer } from "../reducer/blogReducer";

// const configureStore = ()=>{
//     const store = createStore(blogReducer);
//     return store;
// }

// export default configureStore;

import { applyMiddleware, createStore , compose} from "redux";
import { blogReducer } from "../reducer/blogReducer";
import thunk from "redux-thunk/es";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = ()=>{
    const store = createStore(blogReducer,composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default configureStore;