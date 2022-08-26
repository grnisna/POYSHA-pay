import React from 'react';

const Services = ({ service }) => {
 const { services, servicesLogo } = service
 return (
  <div className='service grid justify-center mt-5'>
   <div className="card width bg-base-100 shadow-md text-secondary hover:text-primary justify-center justify-items-center">
    <div className="card-body items-center ">
     <img className="services-img" src={servicesLogo} alt="" />
     <h2 className="text-sm">{services}</h2>
    </div>
   </div>
  </div>
 );
};

export default Services;