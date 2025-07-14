import './Video.css'
import YouTube from 'react-youtube';

const Video = ({title, date, hashtag, id, link}) => {
    return (
        <div className = "video">  
            <div className = "video__thumbnail">
                <YouTube
                className = "youtube"
                videoId = {id}
                opts = {{
                width: "320px",
                height: "180px",
                }}
                />
            </div>
            <div className = "video__info">
                <div className = "video__info__title">
                    {title}
                </div>
                <div className = "video__info__date">
                    업로드: {date}
                </div>
                <div className = "video__info__buttons">
                    <button className = "video__info__buttons--filter">
                        {hashtag}
                    </button>
                    <a className="video__info__buttons--link" href={link} target="_blank" rel="noopener noreferrer">
                        <svg className="link__svgIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                        </svg>
                        보러가기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Video;