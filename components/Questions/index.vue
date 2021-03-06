<template>
  <div
    v-if="questions && questions.length > 0"
    :class="{ 'questions--preview': preview }"
    class="questions"
  >
    <div
      v-for="(question, i) in questions"
      :key="question.id"
      class="questions__item"
      :class="{ 'questions__item--active': openQuestions.includes(i) }"
    >
      <div class="questions__item-question" @click="openAnswer(i)">
        <h4 v-html="question.post_title">
          {{ question.post_title }}
        </h4>
      </div>
      <div
        class="questions__item-answer"
        v-html="question.acf.answer"
      >
        {{ question.acf.answer }}
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    questions: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      openQuestions: []
    }
  },
  mounted() {
    this.closeAnswers()
  },
  methods: {
    closeAnswers() {
      this.answers = document.querySelectorAll('.questions__item-answer')

      TweenMax.set(this.answers, { height: 0 })
    },
    openAnswer(index) {
      const answer = this.answers[index]

      if (this.openQuestions.includes(index)) {
        TweenMax.to(answer, 0.2, { height: 0 })

        this.openQuestions.splice(this.openQuestions.indexOf(index), 1)
      } else {
        TweenMax.set(answer, { height: 'auto' })
        TweenMax.from(answer, 0.2, { height: 0 })

        this.openQuestions.push(index)
      }
    }
  }
}
</script>

<style lang="stylus">
.questions {
  &__item {
    margin: 10px 0;

    &-question {
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
        transform: rotate(-48deg);
        right: 17px;
      }

      &::after {
        transform: rotate(48deg);
        right: 6px;
      }
    }

    &-answer {
      overflow: hidden;
      padding-left: 60px;

      p {
        color: #999;
        font-size: 18px;
        line-height: 30px;
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
    }

    &--active {
      .questions__item-question {
        &::before {
          transform: rotate(-132deg);
        }

        &::after {
          transform: rotate(132deg);
        }
      }
    }
  }

  &--preview {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .questions__item {
      flex: 0 1 46%;
    }

    .questions__item-question {
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
    }

    .questions__item-answer {
      height: auto !important;
      padding-left: 0;
    }
  }

  @media (max-width: 1023px) {
    &__item {
      &-question {
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

      &-answer {
        padding-left: 0;

        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 666px) {
    &__item {
      &--preview {
        flex: 1 1 100%;
      }
    }
  }
}
</style>
