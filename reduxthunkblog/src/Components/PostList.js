import React from 'react';
import {fetchBlogAndUsers} from '../actionCreators';
import {connect} from 'react-redux';
import UserHeader from './UserHeader';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchBlogAndUsers();
    }
    renderList = ()=> {
       return( this.props.posts.map((post)=> {
            return (
            <>
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                <UserHeader userId={post.userId}/>
                <hr/>
            </>
            )
        })
       );
    }
    render() {
        return(
        <div>
           {this.renderList()}
        </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {posts:state.posts}
}
export default connect(mapStateToProps,{fetchBlogAndUsers})(PostList);