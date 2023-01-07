import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import CreateEmployee from "./pages/CreateEmployee";
import Error from "./pages/Error";

import SideBar from "./components/SideBar/SideBar";

import './app.css';
import './responsive.css';
import { useSelector } from "react-redux";

function App() {
  const showSideBar = useSelector(state => state.sidebar.show)

  return (
    <div className="container">
      <BrowserRouter>
        {/* SIDE BAR */}
        { showSideBar && <SideBar /> }

        {/* ROUTES */}
        <Routes>
          <Route path="/" end element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Error />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;