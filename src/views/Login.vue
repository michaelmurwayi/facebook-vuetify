<template>
  <div>

  <div class="main">
    <Intro/>
    <Form/>
  </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Intro from '@/components/intro.vue'
import Form from '@/components/loginForm.vue' // @ is an alias to /src
import Footer from '@/components/footer.vue'
@Component({
  components: {
    Form,
    Footer,
    Intro
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
.main{
  background: #f7f7f7;
  height:700px;
}
</style>
