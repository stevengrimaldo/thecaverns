import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Button } from '../'

import { parseContent } from '../../global/utils'

const BuyPackage = styled(Button)`
  margin-top: 40px;
`

const PackageDetails = styled(Button)`
  &:hover {
    > a,
    > span {
      background-color: transparent;
      border: 0 none;
    }
  }

  @media (max-width: 1023px) {
    padding: 40px 20px;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`

// prettier-ignore
const Content = styled.div`
  @media (max-width: 1023px) {
    ${p => p.preview && `
      display: flex;
      flex-wrap: wrap;
    `}
  }

  @media (max-width: 767px) {
    ${p => p.preview && `
      display: block;
    `}
  }
`

// prettier-ignore
const Title = styled.div`
  @media (max-width: 1023px) {
    ${p => p.preview && `
      border-bottom: 0 none;
      border-right: 1px solid #ffffff;
      font-size: 32px;
    `}
  }

  @media (max-width: 767px) {
    ${p => p.preview && `
      min-height: 200px;
    `}
  }
`

// prettier-ignore
const Package = styled.div`
  h5,
  h6,
  p,
  li {
    margin-bottom: 10px;
    line-height: 1.5;
    transition: 250ms color;
  }

  h5 {
    color: #110a20;
    position: relative;
    padding-bottom: 25px;
    margin-bottom: 20px;
    font-size: 36px;
    font-family: 'Separat';
    font-weight: 700;

    &::after {
      content: '';
      height: 5px;
      width: 200px;
      background-color: #f64a19;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  h6 {
    color: #f64a19;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Work Sans';
    font-weight: 600;
  }

  p {
    line-height: 32px;
  }

  p,
  li {
    color: #999999;
    font-size: 16px;
    margin-bottom: 20px;
    font-family: 'Work Sans';
    font-weight: 400;
  }

  li {
    margin-bottom: 10px;
    list-style-position: inside;
    text-indent: -23px;
    padding-left: 23px;
  }

  strong {
    text-transform: uppercase;
    padding-bottom: 10px;
    font-family: 'Work Sans';
    font-weight: 600;
  }

  ul,
  ol {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;

    > li {
      flex: 0 1 45%;
    }
  }

  ul li {
    list-style-type: disc;
  }

  ol li {
    list-style-type: decimal;
  }

  ${p => p.inverted && `
    h5 {
      &::after {
        background-color: #ffffff;
      }
    }

    h5,
    h6,
    p,
    li {
      color: #ffffff;
    }
  `}

  ${p => p.preview && `
    display: flex;
    margin: 20px 0;
    border: 0 none;
    max-height: none;
    height: auto;
    overflow: auto;
    cursor: default;
    transition: 250ms background-color;

    &::before,
    &::after {
      content: none;
    }

    .packages__item-title {
      padding: 20px 30px;
      flex: 1 1 83%;
      font-size: 42px;
      line-height: 50px;
      border-left: 1px solid #fff;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: 250ms border;
      font-family: 'Separat';
      font-weight: 700;

      h5 {
        margin: 0;
        padding: 0;
        color: #fff;

        &::after {
          content: none;
        }
      }
    }

    .packages__item-cta {
      flex: 1 1 18%;
      background-color: #110a20;
      border: 1px solid #fff;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 250ms background-color, 250ms border;

      > a,
      > span {
        font-size: 18px;
        line-height: 20px;
        padding: 0;
        text-transform: uppercase;
        font-family: 'Separat';
        font-weight: 700;
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        border: 0 none;
      }
    }

    &:hover {
      background-color: #ffffff;

      .packages__item-title {
        h5 {
          color: #110a20;
        }
      }

      .packages__item-cta {
        background-color: #f64a19;
        border-color: #f64a19;
      }
    }
  `}

  @media (max-width: 1023px) {
    ${p => p.preview && `
      flex: 1 1 50%;
      flex-direction: column;

      &:nth-of-type(odd) {
        padding-right: 0;
      }
    `}
  }

  @media (max-width: 767px) {
    h5 {
      font-size: 24px;
    }

    p,
    li {
      font-size: 15px;
    }

    ul,
    ol {
      display: block;
    }

    ${p => p.preview && `
      display: block;

      &:nth-of-type(odd) {
        padding-right: 0;
      }
    `}
  }
`

const Packages = ({ inverted, packages, preview }) => (
  <div>
    <Content>
      {packages.map((pkg, i) => (
        <Package inverted={inverted} key={i} preview={preview}>
          <Title className="packages__item-title" preview={preview}>
            <h5 dangerouslySetInnerHTML={parseContent(pkg.post_title)} />
          </Title>
          {preview ? (
            <PackageDetails
              className="packages__item-cta"
              inverted
              path={`/packages#${pkg.ID}`}
              text="View Package Details"
            />
          ) : (
            <div>
              <div>
                <div
                  dangerouslySetInnerHTML={parseContent(pkg.acf.description)}
                />
                {pkg.acf.features && pkg.acf.features.length > 0 && (
                  <ul>
                    {pkg.acf.features.map((feature, i) => (
                      <li key={i}>{feature.feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <BuyPackage
                external
                path="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
                text="Buy Package"
              />
            </div>
          )}
        </Package>
      ))}
    </Content>
  </div>
)

Packages.propTypes = {
  inverted: PropTypes.bool,
  packages: PropTypes.array,
  preview: PropTypes.bool,
}

export default Packages
