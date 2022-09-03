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
import Footer from '../../components/footer';
import g_long from '../../assets/logo/g_long.png';
import loginCss from './login.module.css'; 

function Login(){

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
                <input/>
            </div>
        </div>
    )
}

export default Login;