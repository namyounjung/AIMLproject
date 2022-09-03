import {useState} from 'react';
import b_calendar from '../assets/icon/b_calendar.png';
import b_home from '../assets/icon/b_home.png';
import b_menu from '../assets/icon/b_menu.png';
import b_my from '../assets/icon/b_my.png';
import b_search from '../assets/icon/b_search.png';
import g_calendar from '../assets/icon/g_calendar.png';
import g_home from '../assets/icon/g_home.png';
import g_menu from '../assets/icon/g_menu.png';
import g_my from '../assets/icon/g_my.png';
import g_search from '../assets/icon/g_search.png';
import FooterCss from './footer.module.css';
import {NavLink} from 'react-router-dom';

export default function Footer() {
  const [isActive, setIsActive] = useState('home');

    return (
      <div className={FooterCss.footerWrapper}>
        <NavLink 
          to='/menu'
          className={FooterCss.navItem}
        >
          {
            isActive === 'menu'
            ? <img src={g_menu} alt='' />
            : <div onClick={() => {setIsActive('menu')}}><img src={b_menu} alt='' /></div>
          }
        </NavLink>
        <NavLink to='/search' 
          className={FooterCss.navItem}
        >
                    {
            isActive === 'search'
            ? <><img src={g_search} alt='' /></>
            : <div onClick={() => {setIsActive('search')}}><img src={b_search} alt='' /></div>
          }
        </NavLink>
        <NavLink to="/home" 
          className={FooterCss.navItem}>
        {
            isActive === 'home'
            ? <><img src={g_home} alt='' /></>
            : <div onClick={() => {setIsActive('home')}}><img src={b_home} alt='' /></div>
          }
        </NavLink>
        <NavLink to='/calendar' 
          className={FooterCss.navItem}>
        {
            isActive === 'calendar'
            ? <><img src={g_calendar} alt='' /></>
            : <div onClick={() => {setIsActive('calendar')}}><img src={b_calendar} alt='' /></div>
          }
        </NavLink>
        <NavLink to='/mypage' 
          className={FooterCss.navItem}>
        {
            isActive === 'mypage'
            ? <><img src={g_my} alt='' /></>
            : <div onClick={() => {setIsActive('mypage')}}><img src={b_my} alt='' /></div>
          }
        </NavLink>
      </div>
    );
  }
  