import './App.css';
import Head from './component/layout/Head';
import Login from './component/account/Login';
import Signup from './component/account/Singup';
import Prosess from './component/prosess/MainProsess';
import Foot from './component/layout/Foot';
import NotFound from './component/etc/NotFound';
import { Route,Routes } from 'react-router-dom';
import Main from './component/main/Main';
import Test from './component/etc/Test';
import Test2 from './component/etc/Test2';
import LogOut from './component/account/Logout';
import DownLoadMain from './component/download/DownLoadMain';
import Info from './component/info/Info';
import Developer from './component/developer/Developer';



function App() {
  return (
    <div
    style={{
      backgroundColor:'#e5e5e5',
    }}>
      <Head/>
      &nbsp;
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Logout' element={<LogOut/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Prosess' element={<Prosess/>}/>
        <Route path='/Download' element={<DownLoadMain/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/Developer' element={<Developer/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/Test' element={<Test/>}/>
        <Route path='/Test2' element={<Test2/>}/>
      </Routes>
      <Foot></Foot>
    </div>
  );
}

export default App;
