import service from '../apis/service';
import _ from 'lodash';
export const fetchBlogAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchBlog());
    let uniqueIds = _.uniq(_.map(getState().posts ,'userId'));
    console.log(uniqueIds,"unique")
    uniqueIds.forEach((id)=> dispatch(fetchUser(id)));
}
export const fetchBlog = ()=> async dispatch => {
    let response = await service.get('/posts');
    dispatch( {
        type: 'FETCH_BLOG',
        payload: response.data
    });
}
export const addBlog = ()=>{
    return ({type:"ADD_BLOG",payload:{ id: 123, title: 'Post Title' } });
}

export const fetchUser = userId => async (dispatch,getState) =>  {
    console.log(userId,"user")
    let response = await service.get(`/users/${userId}`);
    dispatch( {type: "FETCH_USER", payload: response.data});
}
// export const fetchUser = userId => dispatch => _fetchUser(userId,dispatch);

// const _fetchUser = _.memoize(async(userId,dispatch)=>{{
//         let response = await service.get(`/users/${userId}`);
//         dispatch( {type: "FETCH_USER", payload: response.data});
//     }
// });