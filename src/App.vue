<template>
  <div id="app">
    <header class="site-header">
      <section class="whoiam">
        <hgroup>
          <h1 class="whoiam-name">Divosky</h1>
          <h3 class="whoiam-desc">Front-End Developer</h3>
        </hgroup>
      </section>
      <nav class="nav-main">
        <ul>
          <li>
              <router-link to="/">Homepage</router-link>
          </li>
          <li>
              <router-link to="/Projects">Projects</router-link>
          </li>
          <li>
              <router-link to="/Contact">Contact</router-link>
          </li>
        </ul>
      </nav>
      <section class="header-footer">
        &copy; Mikołaj <i>"Divosky"</i> Szczepański {{ new Date().getFullYear() }}
      </section>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

@import '/assets/scss/variables';
@import '/assets/scss/base';
@import '/assets/scss/main';
</style>
