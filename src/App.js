import "./App.css";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import AdminDashboard from "./components/AdminDashboard";
import Button from "./components/buttons";
import Borders from "./components/Borders";
import Other from "./components/Other";
import { Switch, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Error from "./components/404";
import Blank from "./components/Blank";
import Tables from "./components/Tables";
import Charts from "./components/Charts";
import Colors from "./components/Colors";
import Animation from './components/Animation'
import Footer from "./components/Footer";
//  <!-- APP component -->

function App() {
  return (
    <Switch>
      {/* <!-- login page -->  */}

      <Route exact path="/Login">
        <Login />
      </Route>

      {/* <!-- blank page -->  */}

      <Route exact path="/Blank">
        <div id="wrapper">
          <DashboardSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <DashboardNavbar />
              <div className="container-fluid">
                <Blank />
              </div>
            </div>
          </div>
        </div>
      </Route>

      {/* <!-- register page -->  */}

      <Route path="/Register">
        <Register />
      </Route>
      {/* <!-- forgot-password page -->  */}

      <Route path="/Forgot">
        <Forgot />
      </Route>

      {/* <!-- utilities-404 page -->  */}

      <Route path="/404">
        <Error />
      </Route>

      {/* <!-- Home page -->  */}

      <div id="wrapper">
        <DashboardSidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <DashboardNavbar />

            <Route exact path="/">
              <div className="container-fluid">
                <AdminDashboard />
              </div>
            </Route>

          
            {/* <!-- button page -->  */}

            <Route exact path="/buttons">
              <div className="container-fluid">
                <Button />
              </div>
            </Route>

            {/* <!-- Card page-->  */}
            <Route path="/Cards">
              <div className="container-fluid">
                <Cards />
              </div>
            </Route>

            {/* <!-- colors page -->  */}

            <Route exact path="/Colors">
              <div className="container-fluid">
                <Colors />
              </div>
            </Route>

            {/* <!-- UtilitiesBorder page -->  */}

            <Route exact path="/Borders">
              <div className="container-fluid">
                <Borders />
              </div>
            </Route>
            {/* <!-- UtilitiesAnimation page -->  */}

            <Route exact path="/Animation">
              <div className="container-fluid">
                <Animation />
              </div>
            </Route>

            {/* <!-- utilities-other page -->  */}
            <Route exact path="/Other">
              <div className="container-fluid">
                <Other />
              </div>
            </Route>

            {/* <!-- table page -->  */}

            <Route exact path="/Tables">
              <div className="container-fluid">
                <Tables />
              </div>
            </Route>

           

            {/* <!-- charts page -->  */}
            <Route exact path="/Charts">
              <div className="container-fluid">
                <Charts />
              </div>
            </Route>

 
          </div>
          <Footer/>
          
        </div>
       
              
               
             
            
      </div>
      

    </Switch>
    
  );
}
export default App;