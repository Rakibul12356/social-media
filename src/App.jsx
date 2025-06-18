import {Routes, Route} from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/notFound/NotFound';
;

function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Profile />} path="/me" />
        </Route>
        <Route element={<Login/>} path="/login" />
        <Route element={<Registration/>} path="/register" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  )
}

export default App