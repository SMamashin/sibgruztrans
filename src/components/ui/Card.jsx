import './Card.scss';
import { Button } from './Button';

// eslint-disable-next-line react/prop-types
const Card = ({ containerStyle, buttonLabel = "Перевезти" }) => {
  return (
    <div className="cargo-transport" style={containerStyle}>
      <div className="cargo-transport__header">
        <h1>ГРУЗОПЕРЕВОЗКА</h1>
        <p>БЫСТРО И УДОБНО.</p>
      </div>
      <div className="cargo-transport__content">
        <img
          src="https://via.placeholder.com/400x200" // Замените на реальный URL или используйте локальный ресурс
          alt="Truck"
          className="cargo-transport__image"
        />
        <Button className="cargo-transport__button">{buttonLabel}</Button>
      </div>
    </div>
  );
};

export default Card;