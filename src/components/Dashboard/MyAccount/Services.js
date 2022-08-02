import React from 'react';

const Services = ({ service }) => {
 const { services, servicesLogo } = service
 return (
  <div className='services'>
   <div class="card width  bg-base-100 shadow-xl">
    <div class="card-body justify-center items-center p-2">
     <img className="services-img" src={servicesLogo} alt="" />
     <h2 class="text-sm">{services}</h2>
    </div>
   </div>
  </div>
 );
};

export default Services;