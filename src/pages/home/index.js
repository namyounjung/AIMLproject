import Footer from '../../components/footer';
import BrandList from '../datail/object';
import Cal from '../Calendar';
import Login from '../datail/login';
import { Calendar } from 'react-calendar';
import {Switch, Route, Redirect } from 'react-router-dom';
import Header from './header';
import MainBanner from './components/mainbanner';
export default function HomeIndex(){
    return (
        <div >
            <Header />
            <MainBanner />
        </div>
    )
}
