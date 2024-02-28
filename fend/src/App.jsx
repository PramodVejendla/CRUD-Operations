import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import User from "./Pages/User";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
