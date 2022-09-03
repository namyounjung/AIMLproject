import React, { useState } from 'react';
import Footer from '../../../components/footer';
import signupCss from './signup.module.css'; 
import {NavLink} from 'react-router-dom';
import back from '../../../assets/icon/back.svg';
import styled from "styled-components";

const OPTIONS_M = [
    { value : '01', name : '1월' },
    { value : '02', name : '2월' },
    { value : '03', name : '3월' },
    { value : '04', name : '4월' },

    { value : '05', name : '5월' },
    { value : '06', name : '6월' },
    { value : '07', name : '7월' },
    { value : '08', name : '8월' },
    { value : '09', name : '9월' },
    { value : '10', name : '10월' },
    { value : '11', name : '11월' },
    { value : '12', name : '12월' }
];

const OPTIONS_D = [
    { value : '01', name : '1일' },
    { value : '02', name : '2일' },
    { value : '03', name : '3일' },
    { value : '04', name : '4일' },

    { value : '05', name : '5일' },
    { value : '06', name : '6일' },
    { value : '07', name : '7일' },
    { value : '08', name : '8일' },
    { value : '09', name : '9일' },
    { value : '10', name : '10일' },
    { value : '11', name : '11일' },
    { value : '12', name : '12일' },

    { value : '13', name : '13일' },
    { value : '14', name : '14일' },
    { value : '15', name : '15일' },
    { value : '16', name : '16일' },
    { value : '17', name : '17일' },
    { value : '18', name : '18일' },
    { value : '19', name : '19일' },
    { value : '20', name : '20일' },
    { value : '21', name : '21일' },
    { value : '22', name : '22일' },
    { value : '23', name : '23일' },
    { value : '24', name : '24일' },
    { value : '25', name : '25일' },
    { value : '26', name : '26일' },
    { value : '27', name : '27일' },
    { value : '28', name : '28일' },
    { value : '29', name : '29일' },
    { value : '30', name : '30일' },
    { value : '31', name : '31일' }
];

export const Select = styled.select`
	margin: 0 0 0 10px;
	min-width: 0;
	width: 30%;
    height: 40px;
	font-size: inherit;
	line-height: inherit;
	border: 1px solid;
	border-radius: 4px;
	color: inherit;
	background-color: transparent;
	&:focus {
		border: 2px solid #82AF00;
	}
`;

const SelectBox = (props) => {
	const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

	return (
		<Select onChange={handleChange}>
			{props.options.map((option) => (
				<option
					key={option.value}
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
};





function SignupIndex(){
    const [isActive, setIsActive] = useState('');
    
    return (
        <div className={signupCss.container}>

            <div className={signupCss.backWrapper}>
                <NavLink to='/mypage'>
                    {
                        isActive === 'mypage'
                        ? <><img src={back} alt='' /></>
                        : <><img src={back} alt='' /></>
                    }
                </NavLink>
                <div className={signupCss.title}>회원가입</div>
            </div>
            <div className={signupCss.inputWrapper}>
                <p className={signupCss.inputTitle}>아이디</p>
                <input/>
            </div>

            <div className={signupCss.inputWrapper}>
                <p className={signupCss.inputTitle}>비밀번호</p>
                <input type='password'/>
            </div>

            <div className={signupCss.inputWrapper}>
                <p className={signupCss.inputTitle}>비밀번호 확인</p>
                <input type='password'/>
            </div>

            <div className={signupCss.inputWrapper}>
                <p className={signupCss.inputTitle}>이름</p>
                <input/>
            </div>

            <div className={signupCss.birthWrapper}>
                <p className={signupCss.inputTitle}>생년월일</p>
                <input/>
                <SelectBox options={OPTIONS_M}></SelectBox>
                <SelectBox options={OPTIONS_D}></SelectBox>
            </div>

            <div className={signupCss.inputWrapper}>
                <p className={signupCss.inputTitle}>휴대폰 번호</p>
                <input/>
            </div>

    
            <div className={signupCss.inputWrapper}>
                <NavLink to='/mypage'>
                    <div className={signupCss.button}>
                        <p className={signupCss.btext}>회원가입</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )

}

export default SignupIndex;