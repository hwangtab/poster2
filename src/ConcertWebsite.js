import React, { useState } from 'react';
import './ConcertWebsite.css';

const ConcertWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const artists = [
    {
      name: "남수",
      description: "기타 선율에 실어 조용히 속삭이듯 노래하는 싱어송라이터",
      instagram: "ddackddaguri__books"
    },
    {
      name: "세민",
      description: "도시 속 다양한 소리와 이야기에 귀 기울이며 음악을 만드는 아티스트",
      instagram: "jinyk0602"
    },
    {
      name: "여울",
      description: "자연과 일상에서 영감을 받아 노래를 만드는 싱어송라이터",
      instagram: "yeoouul"
    }
  ];

  return (
    <div className="concert-website">
      <nav>
        <div className="container">
          <h1>딱따구리포크</h1>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
          >
            {isMenuOpen ? '닫기' : '메뉴'}
          </button>
          <ul className={isMenuOpen ? 'show' : ''}>
            <li><a href="#info">공연 정보</a></li>
            <li><a href="#artists">아티스트</a></li>
            <li><a href="#location">위치</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <img src="https://ifh.cc/g/4WhmFM.jpg" alt="딱따구리포크 공연 포스터" className="poster-image" />
          <div className="hero-content">
            <h2>
              2024 딱따구리책방<br />
              특별기획공연<br />
              <span className="highlight">'딱따구리 포크'</span>
            </h2>
            <p>세 여성의 목소리로 들려주는 일상 속 따뜻한 노래</p>
            <a href="https://forms.gle/oRg2CbpK5jWgQxA16" target="_blank" rel="noopener noreferrer" className="booking-button">
              예매하기
            </a>
          </div>
        </section>

        <section id="info">
          <h3>공연 정보</h3>
          <ul className="info-list">
            <li>
              <span role="img" aria-label="calendar">📅</span>
              2024년 7월 13일 (토)
            </li>
            <li>
              <span role="img" aria-label="clock">🕔</span>
              17:00 (개장 16:40)
            </li>
            <li>
              <span role="img" aria-label="location">📍</span>
              수원시 팔달구 정조로 796번길 9 딱따구리책방
            </li>
            <li>
              <span role="img" aria-label="people">👥</span>
              15석 한정
            </li>
            <li>
              <span role="img" aria-label="music">🎵</span>
              예매 20,000원 (음료 한 잔 포함)
            </li>
          </ul>
        </section>

        <section id="artists">
          <h3>출연 아티스트</h3>
          <div className="artist-grid">
            {artists.map((artist, index) => (
              <div key={index} className="artist-card">
                <h4>{artist.name}</h4>
                <p>{artist.description}</p>
                <a href={`https://www.instagram.com/${artist.instagram}/`} target="_blank" rel="noopener noreferrer" className="instagram-link">
                  Instagram: @{artist.instagram}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="location">
          <h3>공연 장소</h3>
          <div className="location-info">
            <p>
              <span role="img" aria-label="book">📚</span>
              <strong>딱따구리책방</strong>
            </p>
            <p>수원시 팔달구 정조로 796번길 9</p>
            <p className="parking-info">
              주차는 근처 공영주차장을 이용해주세요. 시장근처라 주말엔 차량이 많으니 대중교통 이용을 권장합니다.
            </p>
          </div>
          <div className="map-container">
            <img 
              src="https://image.bookshopmap.com/1600,fit,q60/venue/20240421/496026f49e6fa5cb9d762e68887ef62e567cacf9950a9a4c120c8dcabdb69738.jpg?ver=1713680551"
              alt="딱따구리책방 위치" 
              className="static-map"
            />
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 딱따구리책방. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ConcertWebsite;