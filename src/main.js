// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
Vue.config.productionTip = false

const messages = {
  en: {
    helloworld: {
      title: 'Hello',
      article: [
        "If you are looking for someone, who can code you a website - you have hit the perfect spot. Go to the \"Contact\" page as soon as possible and get in touch with me. I offer code of first-class quality, accordance with the latest standards. What does it mean? That you pay and have exactly what you need! You don\'t need to worry about anything. What I can do for you:",
        "Scripts and CMS installation and configuration",
        "Editing and making awesome themes and websites (Responsivity? Mobile-first? Sure!)",
        "Various generators (e.g. graphic generator)",
        "Inormation (e.g. top lists) about your TeamSpeak, SA:MP, CS server on your website!",
        "Contact me ASAP!"
      ]
    },
    projects: {
      title: 'Projects',
      preview: 'Preview'
    },
    nav: {
      homepage: 'Homepage',
      projects: 'Projects',
      contact: 'Contact'
    }
  },
  pl: {
    helloworld: {
      title: 'No witam',
      article: [
        "Jeśli szukasz kogoś, kto wykona Ci stronę internetową lub styl świetnie trafiłeś. Przejdź jak najszybciej do zakładki \"Kontakt\" i skontaktuj się ze mną. Oferuje od siebie świetnej jakości kod, zgodny z najnowszymi standardami. Co to dla Ciebie oznacza? Że płacisz i masz to czego oczekujesz! Nie musisz się o nic martwić. Co mogę wykonać dla Ciebie:",
        "Instalacja i konfiguracja skryptów, CMS",
        "Edycja i tworzenie wspaniałych styli i stron (Responsywność? First-mobile? Pewnie!)",
        "Różne generatory (np. grafiki)",
        "Informacje (np. top listy) twojego serwera TeamSpeak, samp, cs na stronie!",
        "Skontaktuj się jak najszybciej!"
      ]
    },
    projects: {
      title: 'Projekty',
      preview: 'Podgląd'
    },
    nav: {
      homepage: 'Strona Główna',
      projects: 'Projekty',
      contact: 'Kontakt'
    }
  }
}
const i18n = new VueI18n({
  locale: navigator.language, // set user's locale
  fallbackLocale: 'en',
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
