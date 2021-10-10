import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Upload from './components/UploadForm/Upload';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/form" component={Upload} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
