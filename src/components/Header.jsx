import './Header.css';
import logo from '../assets/logo_white.png';

const Header = () => {
    return (
        <>
         <header>
            <img className="header__logo" src={logo} alt="logo"></img>
            <nav>
               <ul>
                  <li>시즌 통계</li>
                  <li>경기 일정</li>
                  <li>선수 정보</li>
                  <li>응원가</li>
                  <li>직관 기록</li>
               </ul>
            </nav>
         </header>
        </>
    );
};

export default Header;