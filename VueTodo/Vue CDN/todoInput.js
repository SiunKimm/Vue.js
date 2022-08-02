const TodoInput = {
    template:`
    <div>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <button v-on:click="addTodo">add</button>
  </div>
    `,
    data: function() {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodo: function() {
        console.log(this.newTodoItem);
        //저장하는 로직

        localStorage.setItem(this.newTodoItem, this.newTodoItem)
        this.newTodoItem=""; //비워주기(초기화)
      }
    }
  }

  // `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`