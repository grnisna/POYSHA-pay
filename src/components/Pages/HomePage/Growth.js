import React, {useState, useEffect} from 'react';
import "./Growth.css"
const Growth = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch ("count.json").then((res) => res.json()).then((data) => setServices(data));
  }, []);

    return (
      <div className="grid grid-cols-3 mapsection">
        {services.map((service) => (
          <div className="card w-96  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{service.firsttext}</h2>
              <p className="stat-value text-primary">{service.secondtext}</p>
              <p>{service.thirdtext}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Growth;