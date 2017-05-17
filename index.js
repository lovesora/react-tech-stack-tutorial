import {Router, Route, browserHistory} from 'react-router';

import App from './app.js';

import DesignPattern from './design-pattern/index.js';
import DPStrategy from './design-pattern/strategy.js';

import Redux from './redux/index.js';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/design-pattern' component={DesignPattern}>
                <Route path='/design-pattern/strategy' component={DPStrategy} />
            </Route>
            <Route path="/redux" component={Redux}>

            </Route>
        </Route>
    </Router>
), document.getElementById('app'));
