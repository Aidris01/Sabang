import {Routes, Route} from 'react-router-dom'
import Login from './login'

function LoginRoute() {
  return (
    <Routes>
        <Route path='/Login' element={<Login />}></Route>
    </Routes>
  )
}

export default LoginRoute