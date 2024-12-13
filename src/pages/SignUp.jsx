/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {useSignUp} from '@/features/auth/hooks/useSignUp.js'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export const SignUp = () => {
	const [userData, setUserData] = useState({email: '', password: ''})
	const [showPassword, setShowPassword] = useState(false)
	const {isPending, signUp} = useSignUp()
	const navigate = useNavigate()
	
	function handleInputChange(e) {
		setUserData({...userData, [e.target.name]: e.target.value})
	}
	
	function handleSignUp() {
		signUp(userData, {onSuccess: handleOnSuccess})
	}
	
	function handleOnSuccess() {
		navigate('/signin')
	}
	
	return (
		<div className='w-96 text-white'>
			<h1 className='mb-10 text-center text-3xl'>Welcome to Crypto Alerts</h1>
			
			<input className='w-full rounded-lg border-transparent py-3 pl-4 text-base border-1.5 placeholder:text-golden_grey-100 bg-golden_grey-900 focus:border-white focus:outline-none'
			       value={userData.email} onChange={handleInputChange} type='email'
			       name='email' autoFocus placeholder='Enter email address'/>
			
			<div className='relative mt-4'>
				<input className='w-full rounded-lg border-transparent py-3 pl-4 text-base border-1.5 placeholder:text-golden_grey-100 bg-golden_grey-900 focus:border-white focus:outline-none'
				       value={userData.password} onChange={handleInputChange} type={showPassword ? 'text' : 'password'}
				       name='password' placeholder='Enter password'/>
				
				<svg className='absolute right-4 cursor-pointer top-3.5 size-6'
				     onClick={() => setShowPassword(!showPassword)}>
					<use href={showPassword ? 'sprite.svg#open-eye' : 'sprite.svg#closed-eye'}/>
				</svg>
			</div>
			
			<button className='mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg duration-200 py-2.5 bg-poodle_green-300 font-open_sans_500 hover:bg-poodle_green-300/85'
			        onClick={handleSignUp}>
				{!isPending ?
					'Sign Up'
					:
					<div className='animate-spin rounded-full border-[2.5px] border-[#72CE9D] border-t-white size-6'/>
				}
			</button>
			
			<p className='mt-8 text-center text-white'>
				Already have an account?&nbsp;
				
				<Link className='cursor-pointer underline underline-offset-4 text-poodle_green-100' to='/signin'>
					SIGN IN
				</Link>
			</p>
		</div>
	)
}
