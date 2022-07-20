<template>
<!-- App.vue(Parent) -->
<div id="app">
  Parent counter : {{ counter }} <br>
  <button @click="addCounter">+</button>
  <button @click="subCounter">-</button>
  <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
  <child v-bind:num="counter"></child>
</div>
</template>

<script>
// App.vue(Parent)
import ChildV from "./ChildV.vue";

export default {
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    child: ChildV
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    // 이벤트 추가
    addCounter() {
      this.counter++;
    },
    subCounter() {
      this.counter--;
    }
  }
};
</script>