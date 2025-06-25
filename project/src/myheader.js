export default function MyHeader() {
    return (
        <>
            <div>
                <header className="topbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="d-flex align-items-center">
                                {/* Menu Toggle Button */}
                                <div className="topbar-item">
                                    <button type="button" className="button-toggle-menu me-2">
                                        <iconify-icon icon="solar:hamburger-menu-broken" className="fs-24 align-middle" />
                                    </button>
                                </div>
                                {/* Menu Toggle Button */}
                                <div className="topbar-item">
                                    <h4 className="fw-bold topbar-button pe-none text-uppercase mb-0">Welcome!</h4>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                {/* User */}
                                <div className="dropdown topbar-item">
                                    <a type="button" className="topbar-button" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="d-flex align-items-center">
                                            <img className="rounded-circle" width={32} src="assets/images/users/avatar-1.jpg" alt="avatar-3" />
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        {/* item*/}
                                        <h6 className="dropdown-header">Welcome Gaston!</h6>
                                        <a className="dropdown-item" href="pages-profile.html">
                                            <i className="bx bx-user-circle text-muted fs-18 align-middle me-1" /><span className="align-middle">Profile</span>
                                        </a>
                                        <div className="dropdown-divider my-1" />
                                        <a className="dropdown-item text-danger" href="auth-signin.html">
                                            <i className="bx bx-log-out fs-18 align-middle me-1" /><span className="align-middle">Logout</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-nav">
                    {/* Sidebar Logo */}
                    <div className="logo-box">
                        <a href="#" className="logo-light">
                            <img src="assets/images/logo-light.png" className="logo-lg" alt="logo light" />
                        </a>
                    </div>
                    {/* Menu Toggle Button (sm-hover) */}
                    <button type="button" className="button-sm-hover" aria-label="Show Full Sidebar">
                        <iconify-icon icon="solar:double-alt-arrow-right-bold-duotone" className="button-sm-hover-icon" />
                    </button>
                    <div className="scrollbar" data-simplebar>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="dashboard-admin.html">
                                    <span className="nav-icon">
                                        <iconify-icon icon="solar:widget-5-bold-duotone" />
                                    </span>
                                    <span className="nav-text"> Dashboard </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-arrow" href="#sidebarProducts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProducts">
                                    <span className="nav-icon">
                                        <iconify-icon icon="solar:t-shirt-bold-duotone" />
                                    </span>
                                    <span className="nav-text"> Products </span>
                                </a>
                                <div className="collapse" id="sidebarProducts">
                                    <ul className="nav sub-navbar-nav">
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="product_list-admin.html">List</a>
                                        </li>
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="product_edit-admin.html">Edit</a>
                                        </li>
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="product_add-admin.html">Create</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-arrow" href="#sidebarCategory" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCategory">
                                    <span className="nav-icon">
                                        <iconify-icon icon="solar:clipboard-list-bold-duotone" />
                                    </span>
                                    <span className="nav-text"> Category </span>
                                </a>
                                <div className="collapse" id="sidebarCategory">
                                    <ul className="nav sub-navbar-nav">
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="category_list-admin.html">List</a>
                                        </li>
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="category_edit-admin.html">Edit</a>
                                        </li>
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="category_add-admin.html">Create</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-arrow" href="#sidebarOrders" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarOrders">
                                    <span className="nav-icon">
                                        <iconify-icon icon="solar:bag-smile-bold-duotone" />
                                    </span>
                                    <span className="nav-text"> Orders </span>
                                </a>
                                <div className="collapse" id="sidebarOrders">
                                    <ul className="nav sub-navbar-nav">
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="order_list-admin.html">List</a>
                                        </li>
                                        <li className="sub-nav-item">
                                            <a className="sub-nav-link" href="order_edit-admin.html">Edit</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}