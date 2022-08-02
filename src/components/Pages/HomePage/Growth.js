import React, {useState, useEffect} from 'react';
import "./Growth.css"
const Growth = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch ("count.json").then((res) => res.json()).then((data) => setServices(data));
  }, []);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 mapsection py-5">
        {services.map((service) => (
          <div className="card my-10 mx-auto text-center bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 from-cyan-500 to-fuchsia-500 shadow-xl">
            <div className="card-body mb-10">
              <h2 className=" card-title text-white ">{service.firsttext}</h2>
              <p className="text-white stat-value ">{service.secondtext}</p>
              <p className='text-white '>{service.thirdtext}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Growth;