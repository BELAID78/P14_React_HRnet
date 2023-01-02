import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import CreateEmployee from "./pages/CreateEmployee";
import Error from "./pages/Error";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        {/* ROUTES */}
        <Routes>
          <Route path="/" end element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Error />}/>
        </Routes>

        {/* SIDE BAR */}

        {/* CONTENT */}
      </BrowserRouter>
    </div>
  );
}

export default App;