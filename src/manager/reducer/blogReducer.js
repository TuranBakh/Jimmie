// const initialState = [];

// export const blogReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CREATE_BLOG":
//             return [...state,action.blog];

//         case "EDIT_BLOG":
//             return state.map(item=>{
//                 if (item.id === action.id) {
//                     return {
//                         ...item,...action.update
//                     }
//                 }else{
//                     return item;
//                 }
//             });

//         case "REMOVE_BLOG":
//             return state.filter(({id})=>{
//                 return id !== action.id
//             })
//     }
// }



const initialState = [];

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state, action.blog];

        case "EDIT_BLOG":
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item, ...action.update
                    }
                } else {
                    return item;
                }
            });

        case "SET_BLOGS":
            return action.blogs;
            
        case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id
            })
    }
}