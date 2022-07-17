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
        type: "CLAIM_POLICY",
        payload: {amountToClaim}
    }
}

module.exports = {createPolicy,deletePolicy,claimPolicy};