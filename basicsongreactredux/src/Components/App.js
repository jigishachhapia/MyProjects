import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
class App extends React.Component {
    render() {
        return (
            <div className = "ui container grid">
                <div className="ui row">
                <div className="eight wide column">
                    <SongList/>
                </div>
                <div className="eight wide column">
                    <SongDetail/>
                </div>
                </div>
            </div>
        )
    }
}

export default App;