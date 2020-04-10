import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Button } from '../'

const BuyTickets = styled(Button)`
  margin-top: 20px;
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: 300ms opacity 100ms, 300ms transform 100ms;

  @media (max-width: 1023px) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Copy = styled.div`
  position: relative;
  z-index: 1;

  h6 {
    font-size: 15px;
    text-transform: uppercase;
    color: #f64a19;
    margin-bottom: 10px;
    position: relative;
    font-family: 'Separat';
    font-weight: 700;

    &::before {
      content: '-';
      color: #cccccc;
      display: inline-block;
      margin-right: 5px;
    }
  }

  p {
    display: inline-block;
    font-size: 12px;
    color: #999999;
    line-height: 1.2;
    border-top: 1px solid #cccccc;
    padding-top: 10px;
    padding-right: 15px;
    font-family: 'Work Sans';
    font-weight: 500;
  }
`

const Content = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-color: #ffffff;
  margin-top: 60px;
  width: calc(100% - 2px);
  top: calc(100% - 60px);
  padding: 20px;
  transform: translate3d(0, calc(-100% + 70px), 0);
  transition: 300ms transform;

  &::before {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    right: 0;
    content: '';
    border-bottom-color: inherit;
    border-bottom-style: solid;
    border-bottom-width: 25px;
    border-right-width: 307px;
    border-right-style: solid;
    border-right-color: transparent;
    top: -25px;
    z-index: 0;
  }

  &::after {
    content: '';
    background-color: #110a20;
    position: absolute;
    top: -25px;
    height: 25px;
    right: -1px;
    width: 1px;
  }

  @media (max-width: 1023px) {
    transform: translate3d(0, -100%, 0);
  }
`

const Icon = styled.i`
  display: block;
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
  max-width: 20px;
  max-height: 15px;

  svg,
  img {
    fill: #ffffff;
    box-shadow: 0 0 30px 0 rgba(#000000, 0.8);
    width: 100%;
    height: auto;
  }
`

const Image = styled.div`
  background-image: url(${p => p.image});
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    background-color: #110a20;
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    z-index: 5;
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 500ms transform, 500ms height;
    background: linear-gradient(
      to bottom,
      rgba(#110a20, 0) 0%,
      rgba(#110a20, 1) 75%
    );
  }

  @media (max-width: 1023px) {
    &::after {
      height: calc(100% + 50px);
      transform: translate3d(0, -50px, 0);
    }
  }
`

// prettier-ignore
const Show = styled.div`
  transition-delay: ${p => p.delay}ms;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0 rgba(#000000, 0.15);
  flex: 1 1 23%;
  max-width: 307px;
  margin: 15px 1%;
  display: block;
  padding: 1px;
  overflow: hidden;
  position: relative;
  min-height: 400px;

  ${p => p.preview && `
    &:nth-of-type(n + 9) {
      display: none;
      transform: translate3d(0, 30px, 0);
      opacity: 0;
    }
  `}

  &:hover {
    .shows__item-image {
      &::after {
        height: calc(100% + 50px);
        transform: translate3d(0, -50px, 0);
      }
    }

    .shows__item-content {
      transform: translate3d(0, -100%, 0);

      .shows__item-content__text {
        > div {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }

  @media (max-width: 1149px) {
    flex-basis: 31%;
    display: block;
  }

  @media (max-width: 959px) {
    flex-basis: 48%;
    display: block;
  }

  @media (max-width: 579px) {
    flex-basis: 98%;
    display: block;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Shows = ({ preview, shows }) => (
  <Wrapper>
    {shows.map((show, i) => (
      <Show delay={i * 50} key={i} preview={preview}>
        {show.acf.taping && (
          <Icon>
            <img src="~/assets/svg/videocamera-white.svg" alt="" />
          </Icon>
        )}
        <Image className="shows__item-image" image={show.acf.show_image} />
        <Content className="shows__item-content">
          <Copy className="shows__item-content__text">
            {show.acf.artist_name.map((artist, i) => (
              <h6 key={i}>{artist.name}</h6>
            ))}
            <p>{show.acf.date}</p>
            <BuyTickets
              external
              inverted
              path="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
              text="Buy Tickets"
            />
          </Copy>
        </Content>
      </Show>
    ))}
  </Wrapper>
)

Shows.propTypes = {
  preview: PropTypes.bool,
  shows: PropTypes.array,
}

export default Shows
