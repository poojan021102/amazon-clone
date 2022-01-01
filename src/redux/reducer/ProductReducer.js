const initialState={basket:[],
    user:null
};
const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_USER":
            state={
                ...state,
                user:action.user
            }
            return state;
        case "ADD_TO_BASKET":
            //code for adding in basket
            state={
                ...state,
                basket:[...state.basket,action.item]
            };
            return state;
            break;
        case "REMOVE_FROM_BASKET":
            //code for deleting from basket
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0){
                //item exists in basket,remove it...
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Can't remove the item with id ${action.id}`);
            }
            state={...state,basket:newBasket};
            return state;
            break;
        default:
            return state;
    }
}
export default ProductReducer;