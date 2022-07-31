import React from 'react';
import {connect} from 'react-redux';
class UserHeader extends React.Component {

    render() {
        if(!this.props.user)
            return null;
        return <>
                <h5>{this.props.user.name}</h5>
                </>
    }
}
const mapStateToProps = (state,ownProps) => {
    console.log(state.users,"users");
   return{ user: state.users.find((user) => user.id === ownProps.userId)}
}

export default connect(mapStateToProps,{})(UserHeader);