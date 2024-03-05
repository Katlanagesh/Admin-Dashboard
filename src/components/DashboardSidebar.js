import React from "react";
import { NavLink, Link } from "react-router-dom";

function DashboardSidebar() {
  return (
   
    <>
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

   
    <hr className="sidebar-divider my-0"/>

   
    <li className="nav-item active">
        <NavLink activeClassName="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></NavLink>
    </li>

  
    <hr className="sidebar-divider"/>

 
    <div className="sidebar-heading">
        Interface
    </div>

<li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#collapseTwo" data-bs-toggle="collapse" 
            aria-expanded="false" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <Link className="collapse-item" to="/buttons">Buttons</Link>
                <Link className="collapse-item" to="/cards">Cards</Link>
            </div>
        </div>
    </li>

   
            <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#collapseUtilities" data-bs-toggle="collapse" 
            aria-expanded="false" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <Link className="collapse-item" to="/Colors">Colors</Link>
                <Link className="collapse-item" to="/Borders">Borders</Link>
                <Link className="collapse-item" to="/Animation">Animations</Link>
                <Link className="collapse-item" to="/Other">Other</Link>
            </div>
        </div>
    </li>
  
       

 
    <hr className="sidebar-divider"/>


    <div className="sidebar-heading">
        Addons
    </div>

    
        <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#collapsePages" data-bs-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <Link className="collapse-item" to="/Login">Login</Link>
                <Link className="collapse-item" to="/Register">Register</Link>
                <Link className="collapse-item" to="/Forgot">Forgot Password</Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <Link className="collapse-item" to="/404">404 Page</Link>
                <Link className="collapse-item" to="/Blank">Blank Page</Link>
            </div>
        </div>
    </li>

   
    <li className="nav-item">
        <Link className="nav-link" to="/charts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></Link>
    </li>

   
    <li className="nav-item">
        <Link className="nav-link" to="/Tables">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></Link>
    </li>

   
    <hr className="sidebar-divider d-none d-md-block"/>

  
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

  
    <div className="sidebar-card d-none d-lg-flex">
    <img class="sidebar-card-illustration mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17XZS7Oxxbfk5joo4IvneDAIpb4nmkDXR8oLdp-xzEQ&s" alt="..."/>
        <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
    </div>

</ul>





  
     </>
  );
}

export default DashboardSidebar;