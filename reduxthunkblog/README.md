why thunk ? if you want to create asynchronous action creators(who dont return data immediately but need some time before action is dispatched)middleware called reduxthunk.
initial setup 
give atleast dummy reducer so code will run.
index.js app.js postlist.js(pass fetchblog in connect function), reducer/index.js,apis/service.js(axios.create({baseurl:""})),
Rules for redux thunk action creator can either return an object or function.

steps: 

in store applyMiddleware(thunk) as second arguement
in action creator return async function with dispatch action called.
async function(dispatch,getState) => { //getState to get state in store, dispatch to dispatch actions.
    let response = await service.get('/posts');
    dispatch({type:"FETCH_ACTION", payload: response});
} 
call this action creator from connect(mapStateToProps,{mapDispatchToprops})(Component)
Reducers should always return some value (never undefined should be returned else error will appear).Whenever you boot your application for first time all reducers are called one time.
no n/w requests or dom element access should be there inside reducer.dont mutate state object inside reducer.
by dont mutate state object we mean either use [...colors,"pink"] or {...profile,name:"sam"} or colors.filter(color => color !== "green") or _.omit(profile,"name") or colors.map(color=>color+"pink")
mapStateToProps = (state,ownProps) => {
    //here ownProps is props passed to that component 
}
instead of passing entire users array to UserComponent you can filter out user in mapStateToProps function.
When we call action creator inside action creator we needto call it with dispatch(like dispatch(fetchPosts())