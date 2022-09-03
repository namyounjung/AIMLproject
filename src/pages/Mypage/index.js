// import React, { useState } from 'react';
// import Footer from '../../components/footer';

// export default function MypageIndex(){
//     return (
//         <div >
//             마이페이지
//             {/* <Footer /> */}
//         </div>
//     )
// }

import React, { useState } from 'react';
import g_long from '../../assets/logo/g_long.png';
import loginCss from './login.module.css'; 
import {NavLink} from 'react-router-dom';

function Login(){

    const [isActive, setIsActive] = useState('');

    return (
        <div className={loginCss.container}>
            <div className={loginCss.logo}>
                <img src={g_long} name='logo' />
            </div>
            <div className={loginCss.inputWrapper}>
                <p className={loginCss.inputTitle}>아이디</p>
                <input/>
            </div>
            <div className={loginCss.inputWrapper}>
                <p className={loginCss.inputTitle}>패스워드</p>
                <input type='password'/>
            </div>
           
           {/* 로그인 조건문 추가하자 */}
     
            <div className={loginCss.inputWrapper}>
                <div className={loginCss.button}>
                    <p className={loginCss.btext}>로그인</p>
                </div>
            </div>

            <div className={loginCss.joinWrapper}>
                <NavLink to='/signup'>

                    {
                        isActive === 'signup'
                        ? <><a className={loginCss.items}>회원가입</a></>
                        : <><a className={loginCss.items}>회원가입</a></>
                    }
                </NavLink>
                
                <a className={loginCss.items}>아이디 찾기</a>
                <a className={loginCss.items}>비밀번호 찾기</a>
            </div>
            
        </div>
                  
    )
}

export default Login;