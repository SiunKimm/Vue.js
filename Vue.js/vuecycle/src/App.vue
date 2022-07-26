<template>
    <div id="App">
        <div class="search">
            <h1>기존 데이터: {{ oldText }}</h1>
            <label>출력될 값: </label> <input type="text" @change="input" />
            <button @click="click">click</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            oldText: '곧 사라져요', // 기존 데이터
            inputText: '', // 출력될 값 (input 데이터)
        };
    },
    methods: {
        input(e) {
            return this.inputText = e.target.value
        },
        click() {
            return this.oldText = this.inputText
        },
    },

    // 어플리케이션(data) 생성 전 
    beforeCreate() {
        console.log('1. beforeCreate', this.oldText);
    },

    // 어플리케이션 생성 후 //제일 많이 사용됨
    created() {
        console.log('2. created', this.oldText);
    },

    // DOM <- template loading
    beforeMount() {
        console.log('3. beforeMount');
        console.log(document.querySelector('h1'))
        alert('beforeMount')
    },

    // Dom 생성 후  //제일 많이 사용됨
    mounted() {
        console.log('4. mounted');
        console.log(document.querySelector('h1'))
        alert('mounted')
    },

    // data 가 바뀌고 화면이 업데이트 전
    beforeUpdate() {
        console.log('5. beforeUpdate');
        alert('beforeUpdate')
    },

    // //data 가 바뀌고 화면이 업데이트 후
    updated() {
        console.log('6. updated', this.oldText);
        alert('updated')
    },

    // 어플리케이션 연결(data)이 해제되기 직전에 실행
    beforeUnmount() {
        console.log('7. beforeUnmount');
        alert('beforeUnmount')
    },

    // 어플리케이션 연결이 해제되고 난 후 실행
    unmounted() {
        console.log('8. unmounted');
        alert('unmounted')
    },
    computed: {},
};
</script>
