import '../App.css';
import HeaderImage from '../images/header-image.jpg'

function Header() {
  return (
    <div className="Header">
      <header className="Header-Title">
        <a>
          40 POSITIVE QUOTES
        </a>
      </header>
      <div className="Header-Image">
        <img src={HeaderImage} className="Image"/>
      </div>
      <div className="Header-Paragraph-Box">
        <div className="Header-Paragraph">
          <p className="Paragraph">Good and positive quotes make you feel positive, optimistic, energetic and optimistic, 
          ready to set goals and take action. Their effect might continue for a little while or longer. 
          To turn this attitude into a habit, you need to read quotes often and every day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
