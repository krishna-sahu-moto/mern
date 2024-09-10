
const Sidebar = ({ selectedTab, setselectedTab }) => {
  // const handleOnClick=(tabName)=>{selectedTab(tabName);} 
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
      <a to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkto="/bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => { setselectedTab("Home") }}>
          <a to="/" className={`nav-link text-white${selectedTab === "Home" && "active"}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkto="/home"></use></svg>
            Home
          </a>
        </li>
        <li onClick={() => { setselectedTab("Dashboard") }}>
          <a to="/" className={`nav-link text-white${selectedTab === "Dashboard" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkto="/speedometer2"></use></svg>
            Dashboard
          </a>
        </li>
        <li onClick={() => { setselectedTab("Orders") }}>
          <a to="/" className={`nav-link text-white${selectedTab === "Orders" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkto="/table"></use></svg>
            Orders
          </a>
        </li>
        <li onClick={() => { setselectedTab("Products") }}>
          <a to="/" className={`nav-link text-white${selectedTab === "Products" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkto="/grid"></use></svg>
            Products
          </a>
        </li>
        <li onClick={() => { setselectedTab("Customers") }}>
          <a to="/" className={`nav-link text-white${selectedTab === "Customers" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkto="/people-circle"></use></svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" to="/">New project...</a></li>
          <li><a className="dropdown-item" to="/">Settings</a></li>
          <li><a className="dropdown-item" to="/">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" to="/">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;