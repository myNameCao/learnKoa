<template>
  <div class="hello">
    <div  class="item"><span  class="title">电站名称:</span><input  class="inputName" type="text"></div>
    <div class="item" ><span  class="title">电站运营商:</span><input type="text"></div>

    <div  class="item" ><span  class="title">电站电站运营类型:</span><input type="text"></div>
    <div>
      <div class="mapTitle"><span>位置:</span><input type="text"  v-model="locasion"   class="locationIput"></div>
     <div id="myMap"></div>
    </div>
     <!-- <vue-pickers
      :show="showPick"
      :columns="1"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"
      >
      </vue-pickers> -->
      <div  @click="addPick">添加电价</div>
       <transition name="fade">
         <div  class="picker" v-if="showPick">
         </div>

      </transition>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 111,
      myMap: null,
      locasion: '',
      pickData: {
        data1: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2001,
            value: 2001
          },
          {
            text: 2002,
            value: 2002
          },
          {
            text: 2003,
            value: 2003
          },
          {
            text: 2004,
            value: 2004
          },
          {
            text: 2005,
            value: 2005
          },
          {
            text: 2006,
            value: 2006
          }
        ]
      },
      defaultData: [
        {
          text: 2001,
          value: 2001
        }
      ],
      showPick: false
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

.item{
  text-align: left;
  width: 100%;
  height: 100px;
  background: #f2f2f2;
  margin-bottom: 5px;
  padding-left: 10px;
  box-sizing: border-box;
}

#myMap{
  width: 750px;
  height: 500px;
  border: 1px #f2f2f2 solid;

}

.picker{
  position:fixed;
  bottom:0;
  height: 400px;
  width: 100%;
  background: white;
  border:1px red solid;

}
.inputName{
border: none;
border-bottom:1px red solid

}
.mapTitle{
  height: 30px;
  width: 100%;
  margin-bottom: 10px;

}
.locationIput{
  margin-left: 10px;
  width: 650px;
  outline: none;
  text-indent: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: .3s;
}
.fade-enter,
.fade-leave-to {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0)
}
</style>
