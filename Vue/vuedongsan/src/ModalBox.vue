/<template>
    <div class="black-bg" v-if="모달창 == true">
    <div class="white-bg">
      <img :src="원룸[데이터].image" class="room-img">
      <h4>{{원룸[데이터].title}}</h4>
      <p>{{원룸[데이터].content}}</p>
      <p>{{원룸[데이터].price}} 원</p>
      <DiscountRoom/>
      <!--
      <button @click="모달창 = false">닫기</button>
      props 는 read-only
      -->
    </div>
  </div>
</template>

<script>
export default {
    name : 'ModalBox',
    props : {
        원룸 : Array,
        데이터 : Number,
        모달창 : Boolean,
        // Array
        // Object
        // String
        // Number
    }
}
</script>

<style>

</style>