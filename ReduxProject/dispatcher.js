const createPolicy = (name,amount) => {
    return {
        type: "CREATE_POLICY",
        payload: {name,amount}
    }
}
const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload:{name}
    }
}
const claimPolicy = (name, amountToClaim) => {
    return {
        type: "CREATE_CLAIM",
        payload: {amountToClaim}
    }
}
const PolicyReducer = (oldListOfPolicy = [], action) =>{
    if(action.type === 'CREATE_POLICY') {
        return [...oldListOfPolicy,action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return oldListOfPolicy.filter((policyName)=> policyName !== action.payload.name)
    }
    return oldListOfPolicy;

}

const AccountReducer = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM') {
        return  bagOfMoney - action.payload.amountToClaim;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
        return bagOfMoney;

}
const ClaimReducer = (oldListOfClaims =[], action) => {
    if(action.type === 'CREATE_CLAIM')
        return [...oldListOfClaims, action.payload];
        return oldListOfClaims;
}
import {createStore, combineReducers} from "redux";

const store = createStore(combineReducers({
    PolicyReducer, AccountReducer, ClaimReducer
}));

store.dispatch(createPolicy("Alex",30));
console.log(store.getState());
store.dispatch(createPolicy("Bob",50));
console.log(store.getState());
store.dispatch(createPolicy("Cat",20));
console.log(store.getState());
store.dispatch(createPolicy("Aarya",20));
console.log(store.getState());
store.dispatch(deletePolicy("Aarya"));
console.log(store.getState());
store.dispatch(claimPolicy("Alex",100));
console.log(store.getState());