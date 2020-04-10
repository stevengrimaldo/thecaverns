import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { TweenMax } from 'gsap'
import styled from '@emotion/styled'

import { parseContent } from '../../global/utils'

// prettier-ignore
const Answer = styled.div`
  height: 0;
  overflow: hidden;
  padding-left: 60px;

  p {
    color: #999999;
    font-size: 18px;
    line-height: 32px;
    font-family: 'Work Sans';
    font-weight: 400;

    + p {
      margin-top: 25px;
    }
  }

  strong {
    font-family: 'Work Sans';
    font-weight: 600;
  }

  u {
    text-decoration: underline;
  }

  a {
    color: #f64a19;
    text-decoration: underline;
  }

  ${p => p.preview && `
    height: auto !important;
    padding-left: 0;
  `}

  @media (max-width: 1023px) {
    padding-left: 0;

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`

// prettier-ignore
const Item = styled.div`
  margin: 10px 0;

  ${p => p.preview && `
    flex: 0 1 46%;
  `}

  @media (max-width: 666px) {
    ${p => p.preview && `
      flex: 1 1 100%;
    `}
  }
`

// prettier-ignore
const Question = styled.div`
  color: #f64a19;
  text-transform: uppercase;
  font-size: 48px;
  margin: 20px 0;
  user-select: none;
  position: relative;
  padding-right: 46px;
  display: inline-block;
  font-family: 'Separat';
  font-weight: 700;

  h4 {
    position: relative;
    padding-left: 60px;
    display: inline-block;

    &::before {
      content: 'Q:';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      color: #110a20;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 18px;
    width: 4px;
    display: block;
    background-color: #f64a19;
    top: 18px;
    transition: 300ms transform;
  }

  &::before {
    right: 17px;
  }

  &::after {
    right: 6px;
  }

  ${p => p.active ? `
    &::before {
      transform: rotate(-132deg);
    }

    &::after {
      transform: rotate(132deg);
    }
  ` : `
    &::before {
      transform: rotate(-48deg);
    }

    &::after {
      transform: rotate(48deg);
    }
  `}

  ${p => p.preview && `
    padding-right: 0;

    h4 {
      padding-left: 0;

      &::before {
        content: none;
      }
    }

    &::before,
    &::after {
      content: none;
    }
  `}

  @media (max-width: 1023px) {
    font-size: 24px;
    padding-right: 30px;
    margin: 10px 0;

    h4 {
      padding-left: 0;

      &::before {
        content: none;
      }
    }

    &::before,
    &::after {
      height: 13px;
      width: 3px;
      top: 5px;
    }

    &::before {
      right: 12px;
    }

    &::after {
      right: 4px;
    }
  }
`

// prettier-ignore
const Wrapper = styled.div`
  ${p => p.preview && `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
`

const Questions = ({ preview, questions }) => {
  const [openQuestions, setOpenQuestions] = useState([])
  const answerRefs = useRef([])
  const openAnswer = index => () => {
    const answer = answerRefs.current[index]

    if (answer) {
      if (openQuestions.includes(index)) {
        TweenMax.to(answer, 0.2, { height: 0 })

        const tmp = [...openQuestions]
        const place = tmp.indexOf(index)

        if (place !== -1) {
          openQuestions.forEach((q, i) => {
            if (q === index) {
              tmp.splice(i, 1)
              setOpenQuestions(tmp)
            }
          })
        }
      } else {
        TweenMax.set(answer, { height: 'auto' })
        TweenMax.from(answer, 0.2, { height: 0 })

        setOpenQuestions([...openQuestions, index])
      }
    }
  }
  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(0, questions.length)
  }, [openQuestions, questions])
  return (
    <Wrapper preview={preview}>
      {questions.map((question, i) => (
        <Item key={i} preview={preview}>
          <Question
            active={openQuestions.includes(i)}
            onClick={openAnswer(i)}
            preview={preview}
          >
            <h4 dangerouslySetInnerHTML={parseContent(question.post_title)} />
          </Question>
          <Answer
            dangerouslySetInnerHTML={parseContent(question.acf.answer)}
            preview={preview}
            ref={e => (answerRefs.current[i] = e)}
          />
        </Item>
      ))}
    </Wrapper>
  )
}

Questions.propTypes = {
  preview: PropTypes.bool,
  questions: PropTypes.array,
}

export default Questions
