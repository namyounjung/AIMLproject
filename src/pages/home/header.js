import React from 'react';
import HomeCss from './home.module.css';
export default function Header() {
    const now = new Date();
    const y  = now.getFullYear();
    let m = now.getMonth();
    const d = now.getDate();

    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    m = month[m];
    const dayOfWeek = week[now.getDay()];
    
    return (
        <div className={HomeCss.header}>
            {m} {d} {dayOfWeek}
        </div>
    );
}
