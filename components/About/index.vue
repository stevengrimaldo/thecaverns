<template>
  <section
    class="section section--about section--half-bottom-padding section--white section--slant section--slant--top-right"
  >
    <div class="caverns__callout">
      <div class="load-more">
        <i/>
      </div>
      <h6>Discover the greatest show
        <br>(under) earth at the caverns
      </h6>
      <div class="logo logo--full">
        <i>
          <img src="~/assets/svg/logo-full.svg" alt>
        </i>
      </div>
    </div>
    <div class="section--intro">
      <div class="intro">
        <h3 class="intro-title">Go Underground</h3>
        <p
          class="intro-copy"
        >Located in the timeless valley of Pelham, TN, at the base of Monteagle mountain, The Caverns lies in an ancient and almost hidden cove in one of the most cavernous places on Earth.</p>
      </div>
    </div>
    <div class="section--wrapper">
      <div class="about">
        <div class="about__content">
          <div class="logo logo--text">
            <i>
              <img src="~/assets/svg/logo-text.svg" alt>
            </i>
          </div>
          <h6>The Caverns is the world's newest (and oldest) "performance hall". The Caverns features singular acoustics in a sublime and surreal setting. It's a magical cave and we welcome you to dig deeper.</h6>
          <div class="cta cta--button cta--button--inverted">
            <span>Learn More</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.about {
  &__content {
    perspective: 2000px;
    perspective-origin: top;
    text-align: center;
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(#000, 0.15);
    max-width: 800px;
    width: 100%;
    margin: auto;
    padding: 40px 30px;

    .logo {
      margin-bottom: 30px;
      transform-style: preserve-3d;
      will-change: transform;
    }

    h6 {
      font-size: 20px;
      line-height: 1.2;
      color: #999;
      font-family: 'Work Sans';
      font-weight: 400;
    }

    .cta {
      margin-top: 30px;
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
</style>
