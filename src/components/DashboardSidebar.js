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

   
    <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#"
           role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i className="fas fa-fw fa-cog"></i>
           <span>Components</span>
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="./buttons">buttons</a></li>
             <li><a className="dropdown-item" href="./Cards">Cards</a></li>
           </ul>
        </li>

  
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
          </a>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="./Colors">Colors</a></li>
            <li><a className="dropdown-item" href="./Borders">Borders</a></li>
            <li><a className="dropdown-item" href="./Animation">Animation</a></li>
            <li><a className="dropdown-item" href="./Other">Other</a></li>
            
          </ul>
        </li>

 
    <hr className="sidebar-divider"/>


    <div className="sidebar-heading">
        Addons
    </div>

    
    <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-fw fa-folder"></i><span>Pages</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="./Login">Login</a></li>
            <li><a className="dropdown-item" href="./Register">Register</a></li>
            <li><a className="dropdown-item" href="./Forgot">Forgot Password</a></li>
            <li><a className="dropdown-item" href="./404">404 Page</a></li>
            <li><a className="dropdown-item" href="./Blank">Blank Page</a></li>
          </ul>
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