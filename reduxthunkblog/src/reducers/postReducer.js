export default (state =[],action)=> {
    //state initialize to [] is necessary as state cant be undefined
    switch(action.type) {
        case "FETCH_BLOG":
            return action.payload;
        case "ADD_BLOG":
            return [...state,action.payload];
        default :
            return state;
    }
}