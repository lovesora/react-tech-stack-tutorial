import 'materialize-css';

import NavLink from '../../react-router/NavLink.js';

export default class Header extends React.Component {
    constructor(...args) {
        super(...args);
        this.navs = [];
    }

    componentWillMount() {
        this.addNewNav({
            path: '/design-pattern',
            text: '设计模式'
        });
        this.addNewNav({
            path: '/redux',
            text: 'Redux'
        });
    }

    componentDidMount() {
        $('.app-header__btn-slide-nav').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });
    }

    addNewNav({path, text}) {
        const i = this.navs.length;
        this.navs[i] = <li key={i}><NavLink to={path}>{text}</NavLink></li>;
    }

    render() {
        return <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-activates="app-nav__slide-out" className="button-collapse app-header__btn-slide-nav"><i className=" nav-icon-menu material-icons">menu</i></a>
                    <a href="#" className="brand-logo">Demos</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.navs}
                    </ul>
                </div>
            </nav>
            <ul id="app-nav__slide-out" className="side-nav">
                <li>
                    <div className="userView">
                        <div className="background"></div>
                        <a href="#"><span className="white-text name">liuxin</span></a>
                        <a href="#"><span className="white-text email">475212506@qq.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">home</i>首页</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">文章</a></li>
                <li><a href="#!"><i className="material-icons">border_color</i>最新文章</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">问答</a></li>
                <li><a href="#!"><i className="material-icons">chat</i>热门提问</a></li>
            </ul>
        </div>
    }
}
