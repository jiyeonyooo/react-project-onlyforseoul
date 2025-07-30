import Video from '../components/Video.jsx';
import './HomePage.css';

const HomePage = () => {

   const video1 = {
      title: "줌 인 서울 I 아쉬운 패배 I 서울 2-3 제주 I K리그1 2025 R23 | 2025.07.23 (WED) | Sponsored by Nord VPN",
      date: "2025.07.25",
      hashtag:"줌인서울",
      id: "iDKWwb3rbDg",
      link: "https://www.youtube.com/watch?v=iDKWwb3rbDg",
   }

   const video2 = {
      title: "전역한 박수일, 박수일을 너무 좋아하는 이상민과 커피 한 잔ㅣep.12",
      date: "2025.07.11",
      hashtag:"커피한잔",
      id: "SxFfjBXrNsA",
      link: "https://www.youtube.com/watch?v=SxFfjBXrNsA",
   }

   return(
      <div>
         <Video {...video1} className="video" />
         <Video {...video2} className="video" />
      </div>
   );
};

export default HomePage;