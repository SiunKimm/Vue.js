// npm run serve
// 동적인 UI 만드는 방법
// 1. UI 의 현재 상태를 데이터로 만들어 둠
// 2. 데이터에 따라 UI 가 어떻게 보일지 작성

<template>

  <div v-if="1 == 2">
    안녕하세요
  </div>
  <div v-else-if="1 == 3">
    안녕하세요3
  </div>

    <ModalBox :원룸="원룸" :데이터="데이터" :모달창="모달창" />

    <!--
    Props 로 자식에게 데이터 보내는 법
    Props 는 read-only
    1. 데이터 골라서 보내고
    2. 데이터 등록하고
    3. 데이터 사용
    !-->





  <div class="menu">
    <a v-for="(a,i) in 메뉴" :key="i"> {{ a }}</a>
  </div>

  <CardList :원룸="원룸" :신고수="신고수" />

  <DiscountRoom/>
  
    <!--
    <button @mouseover="신고수 += 1">허위매물신고</button>
    <button @click="increase_1">허위매물신고</button>
    <span>신고수 {{신고수[0]}}</span>
    <h4 @click="모달창 = true">{{products[0]}}</h4>
    !-->

</template>

<script>

import oneroom from './assets/data.js';
import DiscountRoom from './DiscountRoom.vue';
import ModalBox from './ModalBox.vue';
import CardList from './CardList.vue';

export default {
  name: 'App',
  data(){ // state
    return {
      데이터 : 0,
      원룸 : oneroom,
      신고수 : [0, 0, 0, 0, 0, 0],
      메뉴 : ['Home', 'Shop', 'About'],
      모달창 : false,
      // products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods : {
    increase(){
      this.신고수 += 1;
    },
  },
  components: {
    DiscountRoom: DiscountRoom,
    ModalBox: ModalBox,
    CardList: CardList,
}
}
</script>

<style>
body {
  margin : 0
}
div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 50%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>
