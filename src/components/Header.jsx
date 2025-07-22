import './Header.css';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo_white.png';

const Header = () => {

   const navigate = useNavigate();
   const handleLogoClick = () => {
      navigate("/");
   };

    return (
        <>
         <header>
            <img className="header__logo" onClick={handleLogoClick} src={logo} alt="logo"></img>
            <nav>
               <ul>
                  <li><Link to="/report">시즌 통계</Link></li>
                  <li><Link to="/schedule">경기 일정</Link></li>
                  <li><Link to="/players">선수 정보</Link></li>
                  <li><Link to="/schedule">응원가</Link></li>
                  <li><Link to="/schedule">직관 기록</Link></li>
               </ul>
            </nav>
         </header>
        </>
    );
};

export default Header;