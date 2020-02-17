<template>
  <div class="qrCode">
     <img  class="log" src="../assets/img/pullnew/logo.png"/>
     <p class="line1">中国最大的职业司机充换电平台</p>
     <p class="line2">请扫描下方二维码验证快电地推身份</p>
     <p class="line2">生成专属邀请拉新图片</p>
     <div  class="qrbackgroud" @click="gonext">
      <img src="../assets/img/pullnew/creatQr.png" alt="">
     </div>
     <p class="title">长按识别图片二维码</p>
     <p class='bTitle'>此链接仅限地推人员使用</p>
  </div>
</template>

<script>

import ajax from '@utils/ajax'

export default {
  name: 'index',
  data () {
    return {}
  },
  created () {
    ajax({
      url: '/api/shareInfo',
      params: { user: 1, id: 12 },
      success: (res) => {
        console.log(res)
      }
    })
  },
  methods: {
    gonext () {
      this.$router.push({ name: 'collect' })
    }
  }
}
</script>

<style lang="css" scoped>
.qrCode{
  position: relative;
  text-align: center;
  width: 100%;
  height:  100%;
  background-size: contain;
}
.log{
  width: 170px;
  height:  81px;
  margin-top:160px
}

.line1{
 margin-top: 20px;
 color: white;
 font-weight:600;
 font-size: 23Px;
}
.line2{
 margin-top: 20px;
 color: white;
 font-weight:400;
 font-size: 18Px;
}
.qrbackgroud{
  width: 332px;
  height: 332px;
  box-shadow: 2px 5px 20px  5px #7c7b7b;
  margin-top: 220px;
  background: white;
  margin-left: 220px;
}
.qrborder{
  height: 100%;
  width: 100%;
}
.qrbackgroud img {
  margin: 25px;
  height:280px;
  width: 280px;
}
.title{
  margin-top: 20px;
  font-size: 12Px;
  font-weight:600;
}
.bTitle{
  width: 100%;
  position: absolute;
  bottom: 20px;
  color: #333333;
  font-size: 15Px;
}

</style>
