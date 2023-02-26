import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Header from "./Header";
const Dashboard = ()=>{ return (<div>Dashboard</div>);}
const Survey = ()=>{ return (<div>Survey</div>);}
const Landing = ()=>{ return (<div>Landing</div>);}

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/surveys" element={<Dashboard/>}/>
            <Route  path="/surveys/new" element={<Survey/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    );
}

export default App;