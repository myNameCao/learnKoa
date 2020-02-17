<template>
  <div class="showQrcode">
    <img src="../../assets/img/pullnew/logo3.png" alt="" class="logo">
    <p class="text">中国最大的职业司机充换电平台</p>
    <div class="contentImg"></div>
    <div class="qrBackgroud">
      <img :src="url" alt="qrcode">
    </div>
    <p class="idText">ID 2019002347892</p>
    <div class="saveBtn">保存至手机相册</div>
  </div>
</template>

<script>

export default {
  name: 'showQrcode',
  data () {
    return {
      url: ''
    }
  },
  created () {

  },
  mounted () {
  }
}
</script>

<style lang="css" scoped>
.showQrcode{
  width: 100%;
  height: 100%;
  background: #DE505B;
  text-align: center
}
.logo{
  width: 170px;
  height:  81px;
  margin-top:160px
}
.text{
  margin-top: 20px;
  font-size: 22.5Px;
  color: white;
  font-weight: 500;

}
.contentImg{
  width: 642px;
  height: 384px;
  margin:30px auto;
  background: url('../../assets/img/pullnew/contentImg.png') center no-repeat;
  background-size: cover
}
.qrBackgroud{
  margin: auto;
  width:332px;
  height:332px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(0,0,0,0.38);
}
.qrBackgroud img{
  margin: 25px;
  height:280px;
  width: 280px
}
.idText{
margin-top: 20px;
font-weight:600;
font-size: 10Px;
color: white
}
.saveBtn{
  margin: 10px  auto;
  width:500px;
  height:80px;
  line-height:80px;
  background:rgba(255,255,255,1);
  border-radius:47px;
  color: #EA3341;
  font-size: 18Px;
  font-weight: 400
}
</style>
