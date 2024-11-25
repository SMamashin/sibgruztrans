import React, { useState } from "react";
import "../styles/Form.scss";

const Form = () => {
    const [serviceType, setServiceType] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        serviceType: "",
        fromAddress: "",
        toAddress: "",
        furnitureAddress: "",
        workerType: "",
        workerAddress: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="page-container">
            <div className="form-container">
                {/*<h2>Оставить заявку</h2>*/}
                <div className="form-group">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="ФИО"
                    />
                    {formData.fullName && <span className="check-icon">✓</span>}
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Номер телефона"
                    />
                    {formData.phoneNumber && <span className="check-icon">✓</span>}
                </div>
                <div className="form-group">
                    <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => {
                            setServiceType(e.target.value);
                            handleInputChange(e);
                        }}
                    >
                        <option value="">Выберите услугу</option>
                        <option value="cargo">Грузоперевозка</option>
                        <option value="furniture">Сборка мебели</option>
                        <option value="handyman">Разнорабочий</option>
                    </select>
                    {formData.serviceType && <span className="check-icon">✓</span>}
                </div>

                {serviceType === "cargo" && (
                    <>
                        <div className="form-group">
                            <input
                                type="text"
                                name="fromAddress"
                                value={formData.fromAddress}
                                onChange={handleInputChange}
                                placeholder="Адрес откуда"
                            />
                            {formData.fromAddress && <span className="check-icon">✓</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="toAddress"
                                value={formData.toAddress}
                                onChange={handleInputChange}
                                placeholder="Адрес куда"
                            />
                            {formData.toAddress && <span className="check-icon">✓</span>}
                        </div>
                    </>
                )}

                {serviceType === "furniture" && (
                    <div className="form-group">
                        <input
                            type="text"
                            name="furnitureAddress"
                            value={formData.furnitureAddress}
                            onChange={handleInputChange}
                            placeholder="Адрес"
                        />
                        {formData.furnitureAddress && <span className="check-icon">✓</span>}
                    </div>
                )}

                {serviceType === "handyman" && (
                    <>
                        <div className="form-group">
                            <select
                                name="workerType"
                                value={formData.workerType}
                                onChange={handleInputChange}

                            >
                                <option value="">Выберите рабочего</option>
                                <option value="plumber">Сантехник</option>
                                <option value="electrician">Электрик</option>
                                <option value="painter">Маляр</option>
                            </select>
                            {formData.workerType && <span className="check-icon">✓</span>}
                        </div>
                        <div className="form-group">
                            {/*<label>Адрес</label>*/}
                            <input
                                type="text"
                                name="workerAddress"
                                value={formData.workerAddress}
                                onChange={handleInputChange}
                                placeholder="Адрес"
                            />
                            {formData.workerAddress && <span className="check-icon">✓</span>}
                        </div>
                    </>
                )}

                <button onClick={() => console.log(formData)}>Отправить</button>
            </div>
        </div>
    );
};

export default Form;
