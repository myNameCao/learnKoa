<template>
  <div class="getCode">
    <p class="title">手机号码验证</p>
    <p class="msg">短信验证码已发送至</p>
    <ul class="inputContent">
      <li class="codeItem"></li>
      <li class="codeItem"></li>
      <li class="codeItem"></li>
      <li class="codeItem"></li>
    </ul>
    <p class="tip"> 秒后重新发送</p>
    <button class="btn" @click="nextBtn">立即生成</button>
  </div>
</template>
<script>

export default {
  name: 'getCode',
  data () {
    return {
      code: '',
      telephone: '',
      second: 60
    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
    nextBtn () {
      this.$router.push({ name: 'showQrcode' })
    }
  }
}
</script>

<style lang="css" scoped>
.getCode{
 width: 100%;
 height: 100%;
 text-align: center;
 border: 1px solid white;
}
.title{
  margin-top: 56px;
  color: black;
  font-size: 19Px;
  font-weight:500;
}
.msg{
  margin-top: 200px;
  font-size: 18Px;
  color: #333333;
  font-weight: 400;

}
.inputContent{
  height: 116px;
  margin: 68px 0 0 0;
  display: flex;
  justify-content:center;

}
.inputContent li {
  position: relative;
  width: 114px;
  height: 114px;
  margin-left: 24px;
  border: 1px  solid #C4C4C4
}
.codeItem input {
  position: absolute;
  width: 80%;
  height: 80%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  outline: none
}
.inputContent::after{
  contain: '';
  display: block;
  height: 0;
  clear: both;
}
.tip{
  margin-top: 35px;
  padding: 0 80px;
  color: #999999;
  font-size: 17Px;
  text-align: right;
  font-weight:400;
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
</style>
