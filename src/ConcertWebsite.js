import React, { useState, useEffect } from 'react';
import './ConcertWebsite.css';

const ConcertWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const artists = [
    {
      name: "남수",
      description: "자연과 일상에서 영감을 받아 노래를 만드는 싱어송라이터",
      link: "https://www.melon.com/album/detail.htm?albumId=10992395",
      linkType: "melon",
      linkText: "싱글 [와산리](2022)",
      photoUrl: "https://ifh.cc/g/0Gvj7M.png"
    },
    {
      name: "세민",
      description: "도시 속 다양한 소리와 이야기에 귀 기울이며 음악을 만드는 아티스트",
      link: "https://www.melon.com/album/detail.htm?albumId=11395938",
      linkType: "melon",
      linkText: "앨범 [여린 잎](2024)",
      photoUrl: "https://image.bugsm.co.kr/album/images/500/206169/20616910.jpg"
    },
    {
      name: "여울",
      description: "기타 선율에 실어 조용히 속삭이듯 노래하는 싱어송라이터",
      instagram: "yeoouul",
      photoUrl: "https://ifh.cc/g/fOvAaX.png"
    }
  ];

  const venueAddress = "수원시 팔달구 정조로 796번길 9 딱따구리책방";

  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(venueAddress);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  const openBookingPage = () => {
    window.open("https://forms.gle/oRg2CbpK5jWgQxA16", '_blank', 'noopener,noreferrer');
  };

  const openArtistLink = (artist) => {
    if (artist.linkType === "melon") {
      window.open(artist.link, '_blank', 'noopener,noreferrer');
    } else if (artist.instagram) {
      window.open(`https://www.instagram.com/${artist.instagram}/`, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <div className="concert-website" onClick={closeMenu}>
      <nav onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <h1>딱따구리포크</h1>
          <button 
            onClick={toggleMenu}
            className="menu-toggle"
          >
            {isMenuOpen ? '닫기' : '메뉴'}
          </button>
          <ul className={isMenuOpen ? 'show' : ''}>
            <li><a href="#info" onClick={closeMenu}>공연 정보</a></li>
            <li><a href="#artists" onClick={closeMenu}>아티스트</a></li>
            <li><a href="#location" onClick={closeMenu}>위치</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <img 
            src="https://ifh.cc/g/4WhmFM.jpg" 
            alt="딱따구리포크 공연 포스터" 
            className="poster-image clickable-image" 
            onClick={openBookingPage}
          />
          <div className="hero-content">
             <h2>
              2024 딱따구리책방<br />
              특별기획공연<br />
            </h2>

            <h1>
              <span className="highlight">딱따구리 포크</span>
            </h1>
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
            <li>
              <span role="img" aria-label="star">⭐</span>
              스페셜 게스트: 모레도토요일
            </li>
            <li>
              <span role="img" aria-label="microphone">🎤</span>
              공연 후에는 오픈마이크 시간이 이어집니다.
            </li>
          </ul>
        </section>

        <section id="artists">
          <h3>출연 아티스트</h3>
          <div className="artist-grid">
            {artists.map((artist, index) => (
              <div key={index} className="artist-card clickable-card" onClick={() => openArtistLink(artist)}>
                <div className="artist-info">
                  <h4>{artist.name}</h4>
                  <p>{artist.description}</p>
                  <span className="artist-link">
                    {artist.instagram ? `Instagram: @${artist.instagram}` : artist.linkText}
                  </span>
                </div>
                <div className="artist-photo">
                  <img src={artist.photoUrl} alt={`${artist.name} 사진`} />
                </div>
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
            <p className="clickable-address" onClick={openGoogleMaps}>
              {venueAddress}
            </p>
            <p className="parking-info">
              주차는 근처 공영주차장을 이용해주세요. 시장근처라 주말엔 차량이 많으니 대중교통 이용을 권장합니다.
            </p>
          </div>
          <div className="map-container" onClick={openGoogleMaps}>
            <img 
              src="https://image.bookshopmap.com/1600,fit,q60/venue/20240421/496026f49e6fa5cb9d762e68887ef62e567cacf9950a9a4c120c8dcabdb69738.jpg?ver=1713680551"
              alt="딱따구리책방 위치" 
              className="static-map clickable-image"
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