import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="technicians/new">New Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="technicians">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="manufacturers/new">New Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="appointments/new">New Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="appointments">Appointment List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="service">Service History</NavLink>
            </li>
            <NavLink className="navbar-brand" to="salespeople/">Salespeople List</NavLink>
            <NavLink className="navbar-brand" to="salespeople/new">New Salesperson</NavLink>
            <NavLink className="navbar-brand" to="customers/">Customer List</NavLink>
            <NavLink className="navbar-brand" to="customers/new">New Customer</NavLink>
            <NavLink className="navbar-brand" to="sales/">Sale List</NavLink>
            <NavLink className="navbar-brand" to="sales/new">New Sale</NavLink>
            <NavLink className="navbar-brand" to="sales/history">Sale History</NavLink>
            <NavLink className="navbar-brand" to="models/">Model List</NavLink>
            <NavLink className="navbar-brand" to="models/new">New Model</NavLink>
            <NavLink className="navbar-brand" to="automobiles/">Car List</NavLink>
            <NavLink className="navbar-brand" to="automobiles/new">New Car</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
