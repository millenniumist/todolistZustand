import Todo from "./components/Todo"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from "./routes/Router";

function App() {


  return (
    <>
    <ToastContainer/>
    <AppRouter/>
    </>
  )
}

export default App
