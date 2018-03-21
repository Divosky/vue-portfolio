<template>
  <main class="site-content">
    <section class="box box--lg">
      <h3 class="box-title">
        Hello
        <span class="smile"></span>
      </h3>
      <article class="box-content">
        <p>
          If you are looking for someone, who can code you a website - you have hit the perfect spot. Go to the "Contact" page as soon
          as possible and get in touch with me. I offer code of first-class quality, accordance with the latest standards.
          What does it mean? That you pay and have exactly what you need! You don't need to worry about anything. What I can do for you:
        </p>
        <ul class="list">
          <li>Scripts and CMS installation and configuration</li>
          <li>Editing and making awesome themes and websites (Responsivity? Mobile-first? Sure!)</li>
          <li>Various generators (e.g. graphic generator)</li>
          <li>Inormation (e.g. top lists) about your TeamSpeak, SA:MP, CS server on your website!</li>
        </ul>
        <p>Contact me ASAP! </p>
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
