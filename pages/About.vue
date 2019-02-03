<template>
  <main>
    <Hero :hero="hero" />
    <section class="section section--about section--half-bottom-padding section--white section--slant section--slant--top-right">
      <div class="section--wrapper">
        <div class="about">
          <div class="about__content">
            <div class="wysiwyg" v-html="about.content.rendered">{{ about.content.rendered }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
