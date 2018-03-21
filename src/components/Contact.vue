<template>
  <main class="site-content boxes contact">
    <section class="box">
      <h3 class="box-title"><span>E-mail</span></h3>
      <article class="box-content">
        <p>
          <a href="mailto://divoskyy@gmail.com">Divoskyy@gmail.com</a>
        </p>
      </article>
    </section>

    <section class="box">
      <h3 class="box-title"><span>Facebook</span></h3>
      <article class="box-content">
        <p>
          <a href="https://fb.com/divoskyy" rel="nofollow">/divoskyy</a>
        </p>
      </article>
    </section>

    <section class="box">
      <h3 class="box-title"><span>Telegram</span></h3>
      <article class="box-content">
        <p>
          <a href="https://t.me/Divosky" rel="nofollow"><span>@Divosky</span></a>
        </p>
      </article>
    </section>

    <section class="box">
      <h3 class="box-title"><span>Discord</span></h3>
      <article class="box-content">
        <p>
          Divosky#4078
        </p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'the contact page'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/icons";
.contact {
  justify-content: space-around;

  .box-content {
    text-align: center;
  }
  a {
    color: invert($base-color);
    text-decoration: none;
  }
}

@for $i from 1 through 4 {
  .contact {
    .box:nth-child(#{$i}) {
      .box-title:before {
        content: '';
        @extend .icon;
        @extend .icon-brand#{$i};
      }
    }
  }
}
</style>
