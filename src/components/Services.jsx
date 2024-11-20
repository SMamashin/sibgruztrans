import React, { useState, useEffect } from 'react';
import '../styles/Services.scss';
import workersData from '../data/card_data.json';

const Services = () => {
    const [workers, setWorkers] = useState([]);
    const [activeWorker, setActiveWorker] = useState(null);

    useEffect(() => {
        // Загрузка данных из JSON файла
        setWorkers(workersData);
    }, []);

    const handleCardClick = (workerId) => {
        setActiveWorker(workerId);
    };

    return (
        <h1 className="h_services">Наши услуги</h1>
        // <div className="container">
        //     <section id="workers" className="workers">
        //         {workers.map(worker => (
        //             <div
        //                 key={worker.id}
        //                 className={`worker-card ${activeWorker === worker.id ? 'active' : ''}`}
        //                 onClick={() => handleCardClick(worker.id)}
        //             >
        //                 <span className="experience-badge">{worker.experience}</span>
        //                 <h3>{worker.title}</h3>
        //                 <ul className="expertise-list">
        //                     {worker.expertise.map((item, index) => (
        //                         <li key={index}>{item}</li>
        //                     ))}
        //                 </ul>
        //                 <button className="hire-button">Записаться</button>
        //             </div>
        //         ))}
        //     </section>
        // </div>
    );
};

export default Services;