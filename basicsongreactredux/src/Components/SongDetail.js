import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    return(
        
    <div>
        Song Detail
        <h1>{props.selectedSong.title}</h1>
        <h2>{props.selectedSong.duration}</h2>
    </div>
    )
}
const mapStateToProps = (state) =>{
    return {selectedSong: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetail);