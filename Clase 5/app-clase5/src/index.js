import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Avatar from './components/avatarComponent'
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(<Router><App name="Pablo"/></Router>, document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render(
//     <Router>
//        <div>
//         <Route exact path="/" component={App} />
//         <Route path="/avatar" component={Avatar} />
//        </div>

//     </Router>, document.getElementById('root')
// );