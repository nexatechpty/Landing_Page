import React from 'react';
import Slider from 'react-slick';
import {Button, PlayBtn} from '../../components';


const HeroTwo = ()=> {

  const HEROCONTENT = [
    {
      subTitle: 'SUCCESS YOUR BUSINESS',
      title: 'Excellent IT services for your success',
      bgText: 'Solution',
      image: 'images/hero/hero-1-1.jpg',
      shape1: 'images/hero/hero-shape-2-1.png',
      shape2: 'images/hero/hero-shape-2-2.png',
      playBtn: { text1: 'Watch Our Story', text2: 'Subscribe Now', path: 'https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1'},
      btn1: { text: 'ABOUT US', path: '/about'},
      btn2: { text: 'Recent NEWS', path: '/blog'}
    },
    {
      subTitle: 'CONVERY YOU BRAND ESSENCE',
      title: 'Take Service from Expert IT Professinal',
      bgText: 'Support',
      image: 'images/hero/hero-1-2.jpg',
      shape1: 'images/hero/hero-shape-2-1.png',
      shape2: 'images/hero/hero-shape-2-2.png',
      playBtn: { text1: 'Watch Our Story', text2: 'Subscribe Now', path: 'https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1'},
      btn1: { text: 'ABOUT US', path: '/about'},
      btn2: { text: 'Recent NEWS', path: '/blog'}
    },
    {
      subTitle: 'DEDICATED SUPPORT TEAM',
      title: 'Take Free Consultaion For Your Brand',
      bgText: 'Motivate',
      image: 'images/hero/hero-1-3.jpg',
      shape1: 'images/hero/hero-shape-2-1.png',
      shape2: 'images/hero/hero-shape-2-2.png',
      playBtn: { text1: 'Watch Our Story', text2: 'Subscribe Now', path: 'https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1'},
      btn1: { text: 'ABOUT US', path: '/about'},
      btn2: { text: 'Recent NEWS', path: '/blog'}
    }
  ]
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
  };

  return (
    <Slider className="hero-layout2" {...settings}>
      {HEROCONTENT.map((slide, index) => (
        <div key={index}>
          <div className="hero-inner">
            <div className="hero-bg background-image" style={{backgroundImage: `url(${slide.image})`}}></div>
            <div className="hero-shape1"><img src={slide.shape1} alt="bg shape"/></div>
            <div className="hero-shape2"><img src={slide.shape2} alt="bg shape2"/></div>
            <span className="hero-bg-text">{slide.bgText}</span>
            <div className="container">
              <div className="hero-content">
                <div className="hero-play">
                  <PlayBtn path={slide.playBtn.path} className="style4"><i className="fas fa-play"/></PlayBtn>
                  <div className="media-body">
                    <span className="hero-play__title">{slide.playBtn.text1}</span>
                    <p className="hero-play__label">{slide.playBtn.text2}</p>
                  </div>
                </div>
                <span className="hero-subtitle">{slide.subTitle}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <div className="hero-btns">
                  <Button path={slide.btn1.path} className="ls-hero-btn">{slide.btn1.text}<i className="far fa-arrow-right"/></Button>
                  <Button path={slide.btn2.path} className="style2 ls-hero-btn">{slide.btn2.text}<i className="far fa-arrow-right"/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroTwo;