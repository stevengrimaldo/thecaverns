import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import PageWrapper from '../../global/template'

import { Hero, Section } from '../../components'

import { parseContent } from '../../global/utils'

const AboutSection = styled(Section)`
  min-height: initial;
`

const AboutWrapper = styled(PageWrapper)`
  .about {
    &__content {
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;

      h6 {
        margin-bottom: 15px;
        font-size: 28px;
        line-height: 32px;
        color: #110a20;
        font-family: 'Separat';
        font-weight: 700;
      }

      p {
        font-size: 24px;
        line-height: 42px;
        color: #999999;
        font-family: 'Work Sans';
        font-weight: 400;
      }

      .wysiwyg {
        text-align: left;

        img,
        iframe {
          max-width: 100%;
          width: 100%;
          height: auto;
        }

        .video {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 25px;
          height: 0;

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }

        iframe {
          height: 56.25vw;
          max-height: 900px;
        }

        h2 {
          font-size: 48px;
          line-height: 52px;
          color: #110a20;
          font-family: 'Separat';
          font-weight: 700;
        }

        p {
          margin: 40px 0;
          line-height: 40px;
        }
      }
    }

    @media (max-width: 1023px) {
      &__content {
        padding-left: 20px;
        padding-right: 20px;

        h6 {
          font-size: 15px;
        }
      }
    }
  }
`

const About = ({ data }) => (
  <AboutWrapper
    meta={{ meta: data.yoast_meta, title: data.title.rendered }}
    pageClass="about"
  >
    <Hero
      bgColor={data.acf.hero.background_color}
      slides={data.acf.hero.slides}
      small
    />
    <AboutSection bgColor="white" halfBottomPadding slantTopRight>
      <div className="about">
        <div className="about__content">
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={parseContent(data.acf.content.text)}
          />
        </div>
      </div>
    </AboutSection>
  </AboutWrapper>
)

About.propTypes = {
  data: PropTypes.object,
}

export default About
