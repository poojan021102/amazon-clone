const initialState={basket:[],
    user:null
};
const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            //code for adding in basket
            state={
                ...state,
                basket:[...state.basket,action.item]
            };
            return state;
            break;
        case "DELETE_FROM _BASKET":
            //code for deleting from basket
            break;
        default:
            return state;
    }
}
export default ProductReducer;