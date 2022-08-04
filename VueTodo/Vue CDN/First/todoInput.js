const TodoInput = {
    template:`
    <div>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> --!>
      <span class="addContainer" v-on:click="addTodo">
        <button><i aria-hidden="true">add</i></button>
      </span>
  </div>
    `,
    data: function() {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodo: function() {
        if (this.newTodoItem !== '') {
          var obj = {id:`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`, completed: false, item: this.newTodoItem};
          //(텍스트,텍스트) 가 아닌 (텍스트, 불린) 을 저장
          localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
          this.clearInput();
        }
      },
      clearInput: function() {
        this.newTodoItem= ''; //비워주기(초기화)
      } 
    }
  }

  // const time = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`