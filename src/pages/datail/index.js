import Footer from '../../components/footer';
import Header from './header';
import BrandList from './object';
import Cal from '../Calendar';
import Login from './login';
import { Calendar } from 'react-calendar';
export default function DetailIndex() {
    return (
    
      <div>
          <Header />
          {/* <Login /> */}
          <Cal />
          <BrandList />
          <Footer/>
      </div>
    );
  }
  
