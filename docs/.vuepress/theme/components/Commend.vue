<template>
  <div class="contanier theme-default-content content__default">
    <div class="name-area">
      <div class="name">你的名字</div>
      <div class="name-input">
        <input type="text" placeholder="留下你的名字" @blur.stop="validateValue(...arguments, 'name')" v-model.trim="name">
        <div class="error-empty" v-if="isShowErrorName">不能为空</div>
      </div>
    </div>
    <div class="commend-area">
      <div class="name">你的评论</div>
      <div class="commed-input">
        <textarea placeholder="留下你的评论" maxlength="1000" v-model.trim="content"  @blur.stop="validateValue(...arguments,'content')" />
        <div class="error-empty" v-if="isShowErrorContent">不能为空</div>
      </div>
    </div>
    <div class="btn">
      <button @click="setLog">评论</button>
    </div>
  </div>
</template>

<script >
import Axios from 'axios'
import { setLog,getLog } from '../../utils'
export default {
  name: 'commmend',
  data(){
    return {
      name: '',
      content: '',
      isShowErrorName: false,
      isShowErrorContent: false
    }
  },
  computed: {
    sidebar() {
      this.$themeLocaleConfig.sidebar
    }
  },
  methods: {
    setLog(){
      const pageKey = this.$vuepress.$get('pageKey')
      this._axios.post('http://127.0.0.1:7001/setLog', {id: pageKey, log: {
        name: this.name,
        commend: this.content
      }})
      console.log(getLog(pageKey))
    },
    validateValue(value, type) {
      if(type === 'name') {
        if(this.name === '' ) {
          this.isShowErrorName = true
        } else {
          this.isShowErrorName = false
        }
      } else {
        if(this.content === '' ) {
          this.isShowErrorContent = true
        } else {
          this.isShowErrorContent = false
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'
.contanier
  padding .5rem
.name-area
  display flex
.name
  width 5rem
.name-input
  flex 1
  height 1.6rem
.commed-input
   flex 1

input
  width 100%
  height 1.5rem
  border .05rem solid #e5e5e5
  padding 0.01rem
  border-radius 0.2rem 
  &:focus
    background-color #fff
    -webkit-box-shadow 0 0 6px 0 #5094d5
    box-shadow 0 0 6px 0 #5094d5
    border 1px solid #5094d5
textarea
  width 100%
  height 64px
  border .05rem solid #e5e5e5
  padding 0.01rem
  border-radius 0.2rem 
  &:focus
    background-color #fff
    -webkit-box-shadow 0 0 6px 0 #5094d5
    box-shadow 0 0 6px 0 #5094d5
    border 1px solid #5094d5
.commend-area
  display flex
  height 90px
  margin-top 1rem
  margin-bottom .2rem
 .btn
   position relative
   height 25px
   button
    position absolute  
    right 0 
 .error-empty
   color red
   font-size 10px   
</style>
