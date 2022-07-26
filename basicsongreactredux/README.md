1) If its named export we  need import {} from file. 

export const selectSong=()=>{....some code}
then 
import {selectSong} from"./xyz";
but if default export i.e. const selectSong.... export default selectSong then {} not required.

2) npm install react redux react-redux 

3) define reducers (having oldstate and action parameter) function and actioncreator (function which return action(type+payload)).

4) combineReducers from redux 
5) in SongList component import actionCreator selectSong. call this actionCreator on button click. pass actionCreator name to connect(mapStateToProp,{selectSong})(SongList)

6) whatever you pass as second arguement to connect function is passed as props to component SongList.so access it as {this.props.selectSong} 