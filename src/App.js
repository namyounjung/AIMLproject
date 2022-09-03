import {Routes, Route, Navigate} from 'react-router-dom';
import DetailIndex from './pages/datail';
import HomeIndex from './pages/home';
import SearchIndex from './pages/Search';
import MenuIndex from './pages/Menu';
import MypageIndex from './pages/Mypage';
import Cal from './pages/Calendar';
import './App.css';
import BasicLayout from './layouts/BasicLayout';
import SignupIndex from './pages/Mypage/Signup';

function App() {
  return (
    // <DetailIndex />
    <Routes>
      <Route path="/" element={<BasicLayout><HomeIndex></HomeIndex></BasicLayout>}/>
      <Route path="/home" element={<BasicLayout><HomeIndex></HomeIndex></BasicLayout>} />
      <Route path="/mypage" element={<BasicLayout><MypageIndex/></BasicLayout>} />
      <Route path="/search" element={<BasicLayout><SearchIndex/></BasicLayout>} />
      <Route path="/menu" element={<BasicLayout><MenuIndex/></BasicLayout>} />
      <Route path="/detail" element={<DetailIndex/>} />
      <Route path="/calendar" element={<BasicLayout><Cal/></BasicLayout>} />
      <Route path='/signup' element={<BasicLayout><SignupIndex/></BasicLayout>} />
    </Routes>
  );
}

export default App;
