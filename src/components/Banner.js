import React from 'react';
import Signup from '../Json_data/Signup.json';

function Banner() {
  return (
    <header id="header">
    <div className='mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8'>
        <nav className='relative z-58 flex justify-between'>
            <div className='flex items-center md:gap-x-12'>
                <img src='../../logo.png' className='logo' alt='Opalin'/>
                <div className='hidden md:flex md:gap-x-6'>
                <ul className='nav_show'>
                    <li><span className='footer_link'>Home</span></li>
                    <li><span className='footer_link'>Pricing</span></li>
                    <li><span className='footer_link'>Amount</span></li>
                </ul>
            </div>
            </div>

            

            <div className='flex items-center gap-x-5 md:gap-x-8'>
                <ul className='nav_login'>
                    <li><span className='stay'>Log In</span></li>
                    <li><span className='stay signed'>Sign Up</span></li>
                </ul>
            </div>
        </nav>
    </div>

    <div className='signup container'>
        <h1 className='sign_header'>Find the perfect plan for your business.</h1>
        <div className='show_signup'>
    {
        Signup.map((sin,pos) =>{
            return (
            <div className='sign_one' key={sin.id}>
                <p className='small_head'>{sin.small_header}</p>
                <h3 className='header'>{sin.header}</h3>
                <p className='small_paras'>{sin.header_para}</p>
                    <ul className='listed_item'>
                        <li><p className='small_para'>{sin.list_one}</p></li>
                        <li><p className='small_para'>{sin.list_two}</p></li>
                        <li><p className='small_para'>{sin.list_three}</p></li>
                    </ul>
                <div className='sub_btn'>
                <button className='signup_btn'>{sin.submit}</button>
                </div>
            </div>
                   )
        })
    }
    </div>
    </div>
    </header>
  )
}

export default Banner