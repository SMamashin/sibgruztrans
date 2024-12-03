import React, { useState, useEffect } from "react";
import "../styles/Form.scss";

const Form = () => {
    const [activeTab, setActiveTab] = useState("cargo");
    const [isMobile, setIsMobile] = useState(false);

    // Функция для отслеживания изменений ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Устанавливаем состояние для мобильных
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Инициализация при первом рендере

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="page-container">
            <div className="form-container">
                <div className="toggle-container">
                    <div
                        className="toggle-highlight"
                        style={{
                            transform: isMobile
                                ? `translateY(${activeTab === "cargo" ? 0 : 70}px)`
                                : `translateX(${activeTab === "cargo" ? 0 : 100}%)`,
                            transition: "transform 0.5s ease",
                        }}
                    ></div>
                    <div
                        className={`toggle-btn ${activeTab === "cargo" ? "active" : ""}`}
                        onClick={() => setActiveTab("cargo")}
                    >
                        Грузоперевозка
                    </div>
                    <div
                        className={`toggle-btn ${activeTab === "worker" ? "active" : ""}`}
                        onClick={() => setActiveTab("worker")}
                    >
                        Разнорабочий
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Ваше Ф.И.О" />
                </div>
                <div className="form-group">
                    <input type="tel" placeholder="Номер телефона" />
                </div>
                {activeTab === "cargo" ? (
                    <div className="form-group address-group">
                        <input type="text" placeholder="Откуда" />
                        <div className="arrow">-></div>
                        <input type="text" placeholder="Куда" />
                    </div>
                ) : (
                    <div className="form-group">
                        <input type="text" placeholder="Краткое описание работы" />
                    </div>
                )}

                {/* Кнопка отправки */}
                <button className="submit-btn">Отправить</button>
            </div>
        </div>
    );
};

export default Form;
