import React, { useState, useEffect } from 'react';
import './ConcertWebsite.css';

const ConcertWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const artists = [
    {
      name: "허정혁",
      description: "서정의 시인",
      photoUrl: "https://image.fnnews.com/resource/media/image/2023/07/18/202307181447048048_l.jpg",
      instagram: "huhjunghyuk_"
    },
    {
      name: "유동혁",
      description: "거칠지만 따뜻한 포크",
      photoUrl: "https://ifh.cc/g/NZwyZZ.jpg",
      instagram: "youdh_music"
    },
    {
      name: "출장작곡가 김동산",
      description: "한국의 우디거스리",
      photoUrl: "https://search.incheonilbo.com/news/photo/201808/902302_201982_3829.jpg",
      instagram: "dongsan_kim"
    }
  ];

  const venueAddress = "수원시 팔달구 정조로 796번길 9 딱따구리책방";
  const venueInstagram = "ddackddaguri__books";

  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(venueAddress);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  const openBookingPage = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfFqRLFh88ThoAW8s_AVs_CfjOdipwKVp2ckjpzrB19V-9fNw/viewform", '_blank', 'noopener,noreferrer');
  };

  const openInstagram = (instagram) => {
    window.open(`https://www.instagram.com/${instagram}/`, '_blank', 'noopener,noreferrer');
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
          <h1>딱따구리 포크</h1>
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
            src="https://ifh.cc/g/r1H0KA.jpg" 
            alt="딱따구리포크 공연 포스터" 
            className="poster-image clickable-image" 
            onClick={openBookingPage}
          />
          <div className="hero-content">
             <h2>
              세 음악가가 들려주는<br />
              삶의 노래
            </h2>

            <h1>
              <span className="highlight">딱따구리 포크</span>
            </h1>
            <p>청춘의 성찰, 삶의 소중함, 시대의 아픔과 희망까지</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFqRLFh88ThoAW8s_AVs_CfjOdipwKVp2ckjpzrB19V-9fNw/viewform" target="_blank" rel="noopener noreferrer" className="booking-button">
              예매하기
            </a>
          </div>
        </section>

        <section id="info">
          <h3>공연 정보</h3>
          <ul className="info-list">
            <li>
              <span role="img" aria-label="calendar">📅</span>
              2024년 7월 21일 (일)
            </li>
            <li>
              <span role="img" aria-label="clock">🕔</span>
              17:30
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
              예매 25,000원 (음료 포함)
            </li>
            <li>
              <span role="img" aria-label="drink">🍹</span>
              기본음료로 하이볼을 말아드립니다.
            </li>
            <li>
              <span role="img" aria-label="cup">🥤</span>
              다회용잔(유리잔)에 제공됩니다. 텀블러 지참 시 관람이 더 편리합니다.
            </li>
          </ul>
        </section>

        <section id="artists">
          <h3>출연 아티스트</h3>
          <div className="artist-grid">
            {artists.map((artist, index) => (
              <div key={index} className="artist-card" onClick={() => openInstagram(artist.instagram)}>
                <div className="artist-info">
                  <h4>{artist.name}</h4>
                  <p>{artist.description}</p>
                  <p className="instagram-link">@{artist.instagram}</p>
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
          <div className="map-container" onClick={() => openInstagram(venueInstagram)}>
            <img 
              src="https://ifh.cc/g/k5jSlt.jpg"
              alt="딱따구리책방" 
              className="static-map clickable-image"
            />
          </div>
        </section>
      </main>

      <footer>
        <p>예매 문의 | 010-5150-9407</p>
        <p>&copy; 2024 딱따구리책방. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ConcertWebsite;
