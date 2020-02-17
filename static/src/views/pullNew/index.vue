<template>
  <div class="creatQr">
    <div class="title">SIGN IN </div>
    <div class="logContent">
      <img src="../../assets/img/pullnew/logo2.png" alt="logo">
    </div>
    <div class="name item">
      <input type="text" v-model="name" placeholder="请输入你的姓名">
    </div>
    <div class="telphone item ">
      <input type="number" v-model.number="telphone"  placeholder="请输入手机号" >
    </div>
    <button class="btn" @click="nextBtn">下一步</button>
  </div>
</template>

<script>

import ajax from '@utils/ajax'

export default {
  name: 'creatQr',
  data () {
    return {
      pickData: [],
      canclick: false,
      region1: {},
      region2: {},
      showRegion: false,
      name: '',
      telphone: ''
    }
  },
  computed: {
    region () {
      if (!this.region2.areaName) return ''
      return this.region1.areaName + ' _ ' + this.region2.areaName
    }
  },
  mounted () {
  },
  methods: {
    nextBtn () {
      const _this = this
      ajax({
        url: '/api/sigin',
        type: 'POST',
        data: {
          name: _this.name,
          telphone: _this.telphone
        },
        success: res => {
        }
      })
    },
    cancel () {
      this.showRegion = false
    },
    confirm (data) {
      this.showRegion = false
      this.region1 = data[1]
      this.region2 = data[2]
      console.log(this.region2, this.region1)
    },
    changeIcon () {
      this.showRegion = !this.showRegion
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
.creatQr{
  padding: 0 30px;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  border: 1px white solid;
  box-sizing: border-box;
}
.title{
  margin-top: 56px;
  color: black;
  font-size: 19Px;
  font-weight:500;
}
.logContent{
  margin-top: 80px
}
.logContent img{
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto
}
.item{
  height: 124px;
  line-height: 124px;
  border-bottom: 1px solid  #EEEEEE;
  color: #333333;
  font-size: 17Px;
  font-weight: 400;
  text-align: left;
}
.iconUpdown{
  margin-top: 25px;
  float: right;
  width: 100px;
  height: 100px;
  background: url('../../assets/img/pullnew/iconUp.png') center no-repeat;
  background-size: 26px 16px;
  transition: transform .5s;
}
.item input {
  width: 50%;
  height: 90%;
  text-indent: 10px;
  outline:none
}
.item input::placeholder {
 font-size: 17Px;
 color: #CCCCCC;
}
.region{
  margin-top: 80px
}
.btn{
 margin-top:50%;
 width:686px;
 height: 94px;
 line-height: 94px;
 color: white;
 font-size: 18Px;
 background: #EA3341;
 border: none;
 outline: none;
 border-radius: 5px;

}
.downIcon{
    transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  /* IE 9 */
  -moz-transform: rotate(-180deg);
  /* Firefox */
  -webkit-transform: rotate(-180deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(-180deg);

}
</style>
