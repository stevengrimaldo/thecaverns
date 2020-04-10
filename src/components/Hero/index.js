import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Slider from 'react-slick'

import { TweenLite } from 'gsap'

import { Button, Container, Section } from '../'

const HeroButton = styled(Button)`
  margin-top: 30px;

  &:hover {
    > a,
    > span {
      border: 1px solid #ffffff;
      background-color: #ffffff;
      color: #f64a19;
    }
  }
`

const HeroImage = styled.div`
  background-image: url(${p => p.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  z-index: 3;
`

// prettier-ignore
const Wrapper = styled(Section)`
  margin-top: 100px;
  position: fixed;
  min-height: 720px;
  height: 720px;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;

  .section--wrapper {
    position: relative;
    z-index: 5;
    height: 720px;
    display: flex;
    align-items: center;
  }

  + section {
    margin-top: 820px;
    padding-top: 80px;
  }

  ${p => p.small && `
    min-height: 520px;
    height: 520px;

    .section--wrapper {
      height: 520px;
    }

    + section {
      margin-top: 620px;
    }
  `}

  ${p => p.bgColor === 'orange' && p.shadow && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 4;
      background: linear-gradient(
        to bottom,
        rgba(17, 10, 32, 0) 50%,
        rgba(17, 10, 32, 1) 100%
      );
    }
  `}

  ${p => p.shadow && `
    .slick-slide {
      > div > div {
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
          background: linear-gradient(
            to bottom,
            rgba(17, 10, 32, 0) 50%,
            rgba(17, 10, 32, 1) 100%
          );
        }
      }
    }
  `}

  .slick-slide {
    > div > div {
      position: relative;
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    z-index: 10;
    text-align: center;

    > li {
      display: inline-block;

      button {
        font-size: 0;
        width: 20px;
        height: 20px;
        border: 5px solid #ffffff;
        border-radius: 50%;
        margin: 10px;
        cursor: pointer;
      }

      &.slick-active {
        button {
          border-color: #f64a19;
        }
      }
    }

    @media (max-width: 767px) {
      bottom: 30px;
    }
  }

  .hero {
    &__static {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 720px;
    }

    &__image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) !important;
      right: 0;
      width: 100vw;
      overflow: hidden;
    }

    &__content {
      max-width: 715px;
      width: 100%;
      color: #ffffff;

      .bgu-logo {
        margin-bottom: 20px;
      }

      h1 {
        font-size: 62px;
        line-height: 56px;
        text-transform: uppercase;
        font-family: 'Separat';
        font-weight: 700;
        letter-spacing: 1.55px;

        small {
          margin: 30px 0 -10px;
          text-transform: lowercase;
          font-size: 50%;
          display: block;
          transform: translate3d(0, -85%, 0);
        }
      }

      p {
        margin-top: 10px;
        font-size: 16px;
        line-height: 20px;
        font-family: 'Work Sans';
        font-weight: 600;
        margin-top: -30px;
      }
    }

    @media (max-width: 767px) {
      &__static {
        min-height: initial;
        height: auto;
      }

      &__content {
        h1 {
          font-size: 40px;
          line-height: 38px;
        }

        p {
          margin-top: -15px;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    position: relative;
    min-height: initial;
    height: auto;
    z-index: 1;
    padding: 0;

    .section--wrapper {
      height: auto;
      padding: 40px 20px 80px;
    }

    + section {
      margin-top: 0;
      padding-top: 40px;
    }

    ${p => p.small && `
      min-height: initial;
      height: auto;

      .section--wrapper {
        height: auto;
      }

      + section {
        margin-top: 0;
        padding-top: 40px;
      }
    `}

    ${p => p.shadow && `
      .slick-slide {
        > div > div {
          &::after {
            background: linear-gradient(
              to bottom,
              rgba(17, 10, 32, 0) 0%,
              rgba(17, 10, 32, 1) 100%
            );
          }
        }
      }
    `}
  }
`

const Hero = ({ bgColor, noShadow = false, slides, small }) => {
  const heroStatic = useRef(null)
  const heroImage = useRef(null)
  const heroContent = useRef(null)
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  const setPosition = (pageOffset = 0) => {
    if (
      pageOffset <= heroStatic.current.clientHeight &&
      document.documentElement.clientWidth > 768
    ) {
      const scaleFactor = pageOffset / 2000
      const opacityFactor = pageOffset / 400
      const yFactor = pageOffset / 3
      const y = yFactor * -1
      const scale = 1 + scaleFactor
      const opacity = 1 - opacityFactor

      if (heroImage.current) {
        TweenLite.set(heroImage.current, {
          force3D: true,
          opacity,
          scale,
          y,
        })
      }

      if (heroContent.current) {
        TweenLite.set(heroContent.current, {
          force3D: true,
          opacity,
          y,
        })
      }
    }
  }

  const handleScroll = () =>
    setPosition(document.documentElement.scrollTop || document.body.scrollTop)

  const rafEvent = () => requestAnimationFrame(handleScroll)

  useEffect(() => {
    if (window && heroStatic.current) {
      setPosition(document.documentElement.scrollTop || document.body.scrollTop)
      window.addEventListener('scroll', rafEvent)
      return () => window.removeEventListener('scroll', rafEvent)
    }
  }, [heroStatic])

  return (
    <Wrapper bgColor={bgColor} shadow={!noShadow} small={small} unContain>
      <div ref={heroStatic} className="hero__static" />
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="slide">
            {slide.background_image && (
              <HeroImage
                className="hero__image"
                image={slide.background_image}
                ref={heroImage}
              />
            )}
            <Container className="section--wrapper">
              <div ref={heroContent} className="hero__content">
                <div className="hero__content-text">
                  {slide.icon && (
                    <div className="bgu-logo">
                      <img src={slide.icon} alt="" />
                    </div>
                  )}
                  <h1>
                    {slide.title}
                    {slide.sub_title && <small>{slide.sub_title}</small>}
                  </h1>
                  {slide.text && <p>{slide.text}</p>}
                  {slide.link && (
                    <HeroButton
                      external={slide.link.target === '_blank'}
                      path={slide.link.url}
                      text={slide.link.title}
                    />
                  )}
                </div>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

Hero.propTypes = {
  bgColor: PropTypes.string,
  noShadow: PropTypes.bool,
  slides: PropTypes.array,
  small: PropTypes.bool,
}

export default Hero
