class SidebarUser extends React.Component {
    render(){
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="https://api.adorable.io/avatars/285/silverlink" className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#">
                        <i className="fa fa-circle text-success"></i> Online
                    </a>
                </div>
            </div>
        )
    }
}

class SidebarSearch extends React.Component {
    render(){
        return(
            <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>
        )
    }
}

class SidebarMenu extends React.Component {
    render(){
        return(
            <ul className="sidebar-menu">
                <li className="header">HEADER</li>
                <li className="active">
                    <a href="#"><i className="fa fa-link"></i>
                        <span>Link</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-link"></i>
                        <span>Another Link</span>
                    </a>
                </li>
                <li className="treeview">
                    <a href="#">
                        <i className="fa fa-link"></i>
                        <span>Multilevel</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="#">Link in level 2</a></li>
                        <li><a href="#">Link in level 2</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
}

class Sidebar extends React.Component {
    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <SidebarUser />
                    <SidebarSearch />
                    <SidebarMenu />
                </section>
            </aside>
        )
    }

}