import './App.css'
import Login from './components/Login';
import { Route, Routes } from "react-router-dom"
import RequireUser from './components/RequiredUser';
import NotRequireUser from './components/NotRequiredUser';
import Home from './components/Home';
import Signup from './components/signup';
import Dashboard from './components/Dashboard';
import CreateStudent from './components/CreateStudent';

function App() {

  return (
    <div className="">
     <Routes>
      <Route element={<RequireUser/>}>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<Dashboard/>}/>
           <Route path='/create-student' element={<CreateStudent/>}/>
        </Route>

      </Route>
      <Route element={<NotRequireUser/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
