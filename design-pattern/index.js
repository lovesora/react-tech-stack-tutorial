import NavLink from '../react-router/NavLink.js';

export default class DPIndex extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <NavLink to='/design-pattern/strategy'>策略模式</NavLink>
                </ul>
                {this.props.children}
            </div>
        )
    }
};
