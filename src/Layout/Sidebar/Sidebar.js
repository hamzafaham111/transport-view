import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center justify-center">
                        <div className="image">
                            <Avatar src="data:image/jpeg;base64,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" className="img-circle elevation-2" alt={user.username} />
                        </div>
                        {/* <div className="info">
                            <a href="#" className="d-block">{user.username}</a>
                        </div> */}
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <Link to="/dashboard#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Cruscotto
                                    </p>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="record-book" className="nav-link">
                                    <i className="nav-icon far ion-ios-bookmarks" />
                                    <p>
                                        Rubrica
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="transports" className="nav-link">
                                    <i className="far ion-document-text nav-icon" />
                                    <p>
                                        Documenti di transporto
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="transports/add-new-transport" className="nav-link">
                                    <i className="far ion-plus-round nav-icon" />
                                    <p>
                                        Nuovo Documento
                                    </p>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far ion-filing" />
                                    <p>
                                        Transport Documents
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="transports" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Search Documents</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="transports/add-new-transport" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add New Document</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon far ion-log-out" />
                                    <p>
                                        Logout
                                    </p>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-columns" />
                                    <p>
                                        Kanban Board
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-envelope" />
                                    <p>
                                        Mailbox
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inbox</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Compose</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Read</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Pages
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Invoice</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>E-commerce</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Projects</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Project Add</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Project Edit</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Project Detail</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Contacts</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>FAQ</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Contact us</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-plus-square" />
                                    <p>
                                        Extras
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>
                                                Login &amp; Register v1
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/examples/login.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Login v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/register.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Register v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/forgot-password.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Forgot Password v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/recover-password.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Recover Password v1</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>
                                                Login &amp; Register v2
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/examples/login-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Login v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/register-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Register v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Forgot Password v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/recover-password-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Recover Password v2</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/lockscreen.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Lockscreen</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Legacy User Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/language-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Language Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/404.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Error 404</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/500.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Error 500</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/pace.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Pace</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/blank.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Blank Page</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="starter.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Starter Page</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-search" />
                                    <p>
                                        Search
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/search/simple.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Simple Search</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/search/enhanced.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Enhanced</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-header">MISCELLANEOUS</li> */}
                            {/* <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>Tabbed IFrame Plugin</p>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                                    <i className="nav-icon fas fa-file" />
                                    <p>Documentation</p>
                                </a>
                            </li> */}
                            {/* <li className="nav-header">MULTI LEVEL EXAMPLE</li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-circle nav-icon" />
                                    <p>Level 1</p>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-circle" />
                                    <p>
                                        Level 1
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Level 2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>
                                                Level 2
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-dot-circle nav-icon" />
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-dot-circle nav-icon" />
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-dot-circle nav-icon" />
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Level 2</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-circle nav-icon" />
                                    <p>Level 1</p>
                                </a>
                            </li> */}
                            {/* <li className="nav-header">LABELS</li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-danger" />
                                    <p className="text">Important</p>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-warning" />
                                    <p>Warning</p>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-info" />
                                    <p>Informational</p>
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar