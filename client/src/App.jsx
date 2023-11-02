import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
