<template>
  <div>
    <app-header></app-header>
    <qiita :articles="articles"></qiita>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './elements/Header.vue'
import Footer from './elements/Footer.vue'
import Vue from 'vue'
import Component from 'vue-class-component'
import Fetch from '../api/Fetch'
/*
import Github from '@/components/Github.vue'
import Movie from '@/components/Movie.vue'
*/
import Qiita from './Qiita.vue'

@Component({
  components: {
    'app-header': Header,
    'qiita': Qiita,
    'app-footer': Footer
  }
})
export default class Root extends Vue {
  articles = Fetch.getQiita()
}
</script>
