<template>
	<div>
		qiita article
		<div v-for='(article ,index) in articles' @key='index'>
			<li>{{article.title}}</li>
		</div>
	</div>
</template>


<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import axios from '../api/index'

@Component({
  props: ['articles']
})
export default class Qiita extends Vue{
}
</script>
