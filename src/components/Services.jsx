import { useState, useEffect } from "react";
import "../styles/Services.scss";
import servicesData from "../data/card_data.json";

const Services = () => {
  const [services, setServices] = useState([]);
  const [activeServices, setActiveServices] = useState(null);

  useEffect(() => {
    // Загрузка данных из JSON файла
    setServices(servicesData);
  }, []);

  if (
    !Array.isArray(services) ||
    services.length === 0 ||
    services.every((service) => !service.title.trim())
  ) {
    return <p>Нет доступных работников.</p>;
  }

  const handleCardClick = (serviceId) => {
    setActiveServices(serviceId);
  };

  return (
    <>
      <h1 className="h_services">Наши услуги</h1>
      <div className="container">
        <section id="services" className="services">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${
                activeServices === service.id ? "active" : ""
              }`}
              onClick={() => handleCardClick(service.id)}
            >
              <div>
                <h1>{service.title}</h1>
                <h2>{service.subtitle}</h2>
              </div>
              <div>
                <img
                  src={`https://smamashin.ru/e/sibgruztrans/assets/service/${service.image}`}
                  alt={`${service.alt}`}
                />
                <Button>{service.text}</Button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Services;
