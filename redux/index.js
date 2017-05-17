import NavLink from '../react-router/NavLink.js';

export default class ReduxIndex extends React.Component {
    render() {
        return (
            <div>
                <ul>
                </ul>
                {this.props.children}
            </div>
        )
    }
};
