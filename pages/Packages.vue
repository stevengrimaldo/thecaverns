<template>
  <main>
    <Hero :hero="hero" />
    <section
      v-for="(pkg, i) in packages"
      :key="pkg.id"
      class="section section--packages"
      :class="{ 'section--white section--slant--top-left section--slant--bottom-left': i % 2 === 0, 'section--slant section--slant--top-right section--slant--bottom-right': i % 2 !== 0 }"
    >
      <div class="section--wrapper">
        <Packages :packages="[pkg]" />
      </div>
    </section>
  </main>
</template>
