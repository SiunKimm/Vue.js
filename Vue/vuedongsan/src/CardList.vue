/<template>
  <div v-for="(a,i) in 원룸" :key="i">
    <img :src="원룸[i].image" class="room-img">
    <h4>{{원룸[i].title}}</h4>
    <!-- <h4 @click="모달창 = true; 데이터 = i">{{원룸[i].title}}</h4> -->
    <p>{{원룸[i].price}} 원</p>
    <!-- <button @click="신고수[i] += 1">허위매물신고</button> -->
    <span>신고수 {{신고수[i]}}</span>
  </div>
</template>

<script>
export default {
    name : 'CardList',
    props : {
        원룸 : Array,
        신고수 : Number,
    }

}
</script>

<style>

</style>