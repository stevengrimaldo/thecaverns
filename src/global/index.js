import { css } from '@emotion/core'

import { resetCSS } from './reset'
import { fontFaces } from './type'
import { slickCSS } from './slick'
import { sfxCSS } from './sfx'

// prettier-ignore
export default css`
  ${resetCSS}
  ${fontFaces}
  ${slickCSS}
  ${sfxCSS}
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    background-color: #110a20;
  }
  #root {
    height: 100%;
  }
`
