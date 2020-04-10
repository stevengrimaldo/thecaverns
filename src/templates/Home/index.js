import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import PageWrapper from '../../global/template'

import {
  Button,
  BrandIntro,
  Hero,
  Packages,
  Questions,
  Section,
  Shows,
} from '../../components'

const HomeWrapper = styled(PageWrapper)`
  .shows {
    &__legend {
      color: #cccccc;
      padding: 0 1%;
      margin-bottom: 10px;
      font-family: 'Work Sans';
      font-weight: 400;

      .icon {
        transform: translate3d(0, 2px, 0);

        svg {
          fill: #110a20;
        }
      }
    }

    &__more {
      text-align: center;
      margin-top: 30px;

      p {
        margin-top: 20px;
        font-family: 'Work Sans';
        font-weight: 500;

        a {
          color: #f64a19;
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 959px) {
      &__legend {
        text-align: center;
      }
    }
  }

  .questions {
    &__cta {
      margin-top: 40px;
      text-align: center;
    }
  }
`

const Home = ({ data }) => (
  <HomeWrapper
    meta={{ meta: data.yoast_meta, title: data.title.rendered }}
    pageClass="home"
  >
    <Hero
      bgColor={data.acf.hero.background_color}
      slides={data.acf.hero.slides}
    />
    <BrandIntro content={data.acf.brand_intro} />
    <Section
      bgColor="white"
      halfTopPadding
      id="shows"
      intro={data.acf.shows_intro}
      name="shows"
      slantBottomRight
      tag="section"
    >
      <Shows preview shows={data.acf.shows} />
      <div className="shows__more">
        <Button
          external
          path="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
          text="See All Shows"
        />
      </div>
    </Section>
    <Section intro={data.acf.packages_intro} slantTopLeft slantBottomLeft>
      <Packages preview packages={data.acf.packages} />
    </Section>
    <Section bgColor="white" intro={data.acf.questions_intro} slantTopRight>
      <Questions preview questions={data.acf.questions} />
      <div className="questions__cta">
        <Button path="/questions" text="View All Questions" />
      </div>
    </Section>
  </HomeWrapper>
)

Home.propTypes = {
  data: PropTypes.object,
}

export default Home
