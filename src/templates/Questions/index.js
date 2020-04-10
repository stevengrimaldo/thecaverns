import React from 'react'
import PropTypes from 'prop-types'

import PageWrapper from '../../global/template'

import { Hero, Questions as QuestionsFeed, Section } from '../../components'

const Questions = ({ data }) => (
  <PageWrapper
    meta={{ meta: data.yoast_meta, title: data.title.rendered }}
    pageClass="questions"
  >
    <Hero
      bgColor={data.acf.hero.background_color}
      noShadow
      slides={data.acf.hero.slides}
      small
    />
    <Section bgColor="white" slantTopRight>
      <QuestionsFeed questions={data.acf.questions} />
    </Section>
  </PageWrapper>
)

Questions.propTypes = {
  data: PropTypes.object,
}

export default Questions
