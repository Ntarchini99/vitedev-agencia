import './ButtonWhatsapp.css';
import logowhatsapp from '../../assets/whatsapp.png';

const ButtonWhatsapp = () => {
  return (
    <div className="whatsapp-container">
      <a href="https://api.whatsapp.com/send?phone=5491176056935" target="_blank" title="Chat por WhatsApp">
        <img src={logowhatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default ButtonWhatsapp;