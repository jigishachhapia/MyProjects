const policyReducer = (oldListOfPolicy = [], action) =>{
    if(action.type === 'CREATE_POLICY') {
        return new [...oldListOfPolicy,action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return oldListOfPolicy.filter((policyName)=> policyName !== action.payload.name)
    }
    return oldListOfPolicy;

}

const accountReducer = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM') {
        return  bagOfMoney - action.payload.amountToClaim;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
        return bagOfMoney;
}
const claimReducer = (oldListOfClaims =[], action) => {
    if(action.type === 'CREATE_CLAIM')
        return [...oldListOfClaims, action.payload];
        return oldListOfClaims;
}

module.exports =  {policyReducer, accountReducer, claimReducer};