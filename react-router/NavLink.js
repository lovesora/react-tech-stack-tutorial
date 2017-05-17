import {Link} from 'react-router';

export default class NavLink extends React.Component {
  render() {
    return (
        <Link {...this.props} activeClassName='link-nav--active' />
    )
  }
};
