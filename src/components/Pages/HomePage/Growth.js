import React, {useState, useEffect} from 'react';
import "./Growth.css"
const Growth = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch ("count.json").then((res) => res.json()).then((data) => setServices(data));
  }, []);

    return (
      <div className="grid grid-cols-3 mapsection py-5">
        {services.map((service) => (
          <div className="card mx-auto text-center bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 from-cyan-500 to-fuchsia-500 shadow-xl">
            <div className="card-body">
              <h2 className=" card-title">{service.firsttext}</h2>
              <p className="text-base-100 stat-value text-primary">{service.secondtext}</p>
              <p>{service.thirdtext}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Growth;