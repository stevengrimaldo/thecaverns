import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import PageWrapper from '../../global/template'

import { Hero, Packages as PackagesFeed, Section } from '../../components'

const Wrapper = styled(Section)`
  min-height: auto;
`

const Packages = ({ data }) => (
  <PageWrapper
    meta={{ meta: data.yoast_meta, title: data.title.rendered }}
    pageClass="packages"
  >
    <Hero
      bgColor={data.acf.hero.background_color}
      slides={data.acf.hero.slides}
      small
    />
    {data.acf.packages.map((pkg, i) => (
      <Wrapper
        bgColor={i % 2 !== 0 ? 'white' : null}
        id={`${pkg.ID}`}
        key={i}
        name={`${pkg.ID}`}
        slantTopLeft={i % 2 !== 0}
        slantTopRight={i % 2 === 0}
        slantBottomLeft={i % 2 !== 0 && i + 1 !== data.acf.packages.length}
        slantBottomRight={i % 2 === 0 && i + 1 !== data.acf.packages.length}
      >
        <PackagesFeed inverted={i % 2 === 0 || false} packages={[pkg]} />
      </Wrapper>
    ))}
  </PageWrapper>
)

Packages.propTypes = {
  data: PropTypes.object,
}

export default Packages
