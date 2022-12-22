import React from 'react';
import Feature from '../Json_data/Feature.json';

function Feature_sec() {



  return (
    <ul className='feature_show p-0 m-auto text-center container'>
        
        {
          Feature.map((item,pos) => {
            return (
              
              <li key={item.id}>
                <div className='feature_act text-center'>
                  <div className='show_img text-center rounded-full m-auto bg-gray-200'>
                    <img src={item.image} alt="Opalin" className='feature_pic' />
                  </div>
                  <div className="feature_set text-center p-2">
                      <p className='feature_head '>{item.header}</p>
                      <p className='feature_para'>{item.paragraph}</p>
                  </div>
                  </div>
              </li>
              
            )
          })
        }
    </ul>
  )
}

export default Feature_sec