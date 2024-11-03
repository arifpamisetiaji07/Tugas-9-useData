import { Routes, Route } from "react-router-dom"
import Users from "./components/users";
import Register from "./components/register";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
