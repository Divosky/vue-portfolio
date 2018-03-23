<template>
  <main class="site-content">
    <section class="box box--lg">
      <h3 class="box-title">
        {{ $t("helloworld.title") }}
        <span class="smile"></span>
      </h3>
      <article class="box-content">
        <p>
          {{ $t("helloworld.article[0]") }}
        </p>
        <ul class="list">
          <li>{{ $t("helloworld.article[1]") }}</li>
          <li>{{ $t("helloworld.article[2]") }}</li>
          <li>{{ $t("helloworld.article[3]") }}</li>
          <li>{{ $t("helloworld.article[4]") }}</li>
        </ul>
        <p>{{ $t("helloworld.article[5]") }}</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.smile {
  flex: 0;
}
.smile:before {
  position: relative;
  left: 5px;
  display: inline-block;
  content: $smile;
  transform: $smile-transform;
}
</style>
