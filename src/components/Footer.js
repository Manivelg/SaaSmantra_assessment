import React from 'react';

function Footer() {
  return (
    <>
    <section className='footer'>
    <div className='footer_sec container m-auto'>
        <div className='footer_one'>
            <p className='footer_header'>Opalin &#9415;</p>
            <p className='footer_head'>We're a completely remote company, working 
            across twenty <span className='sp_block'>countries with over 20,000 customers.</span></p>
        </div>

        <div className='footer_two'>
            <p className='footer_header'>Info</p>
            <p className='footer_para'><span className='footer_link'>Getting Started</span></p>
            <p className='footer_para'><span className='footer_link'>Resources</span></p>
            <p className='footer_para'><span className='footer_link'>Design</span></p>
            <p className='footer_para'><span className='footer_link'>Tutorials</span></p>
            <p className='footer_para'><span className='footer_link'>Pricing</span></p>
        </div>

        <div className='footer_three'>
            <p className='footer_header'>Support</p>
            <p className='footer_para'><span className='footer_link'>Documentation</span></p>
            <p className='footer_para'><span className='footer_link'>Requirements</span></p>
            <p className='footer_para'><span className='footer_link'>License</span></p>
            <p className='footer_para'><span className='footer_link'>Updates</span></p>
            <p className='footer_para'><span className='footer_link'>Contacts</span></p>
        </div>

        <div className='footer_two'>
            <p className='footer_header'>Connect</p>
            <p className='footer_para'><span className='footer_link'>Twitter</span></p>
            <p className='footer_para'><span className='footer_link'>Facebook</span></p>
            <p className='footer_para'><span className='footer_link'>Instagram</span></p>
            <p className='footer_para'><span className='footer_link'>Medium</span></p>
        </div>

    </div>
    <div className='text-center copy_foot'>
        <p className='copyright'>HTML Template by UI/UX Assets - &copy; 2018. <span className='sp_footer'>All rights reserved.</span></p>
    </div>
    </section>
    </>
  )
}

export default Footer