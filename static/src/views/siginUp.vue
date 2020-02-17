<template>
  <div class="siginUp">
     <div class="head">新用户注册</div>
     <p class="title">欢迎注册快电</p>
     <P class="inputItem"><input type="text"> <span>获取验证码</span></P>
     <P class="inputItem" ><input type="text"> <span>获取验证码</span></P>
     <p></p>
     <button class="btn">立即注册</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: {

  }, // 计算属性
  methods: {
    creatMap () {
      let map = null
      const _this = this
      const AMap = window.AMap
      this.myMap = map = new AMap.Map('myMap', {
        resizeEnable: true
      })
      map.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 10000, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', _this.onComplete)
        AMap.event.addListener(geolocation, 'error', _this.onError)
      })
    },
    addPick () {
      this.showPick = true
    },
    onComplete (data) {
      this.locasion = data.formattedAddress
    },
    onError () {
      this.locasion = '定位失败请输入'
    },
    confirmFn (res) {
    },
    close () {
      this.showPick = false
    }
  },
  created () {
  },
  mounted () {
    this.creatMap()
  },
  components: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .siginUp{
   padding: 0 30px;
  }
  .head {
   width: 100%;
   height:52px;
   margin-top: 56px;
   line-height: 52px;
   font-size: 19Px;
   font-weight:500;
   text-align: center

  }
  .title{
  margin-top:135px;
  margin-bottom: 30px;
  height: 67px;
  line-height: 67px;
  text-align: left;
  font-size: 24Px;
  font-weight: 600;
  }
  .inputItem{
    height: 105px;
    line-height: 105px;
    border-bottom: 1px solid #EEEEEE
  }
  .btn{
    margin-top:30px;
    width:686px;
    height:94px;
    line-height: 94px;
    background:#EA3341;
    border-radius:4px;
    font-weight:400;
    color: white;
    font-size:18Px;
    border: none;
    outline: none
  }
</style>
