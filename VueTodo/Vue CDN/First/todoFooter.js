const TodoFooter = {
  template:`
  <div class="clearAllContainer">
      <button class="clearAllBtn" v-on:click="clearTodo">Clear All</button>
  </div>
  `,
  methods: {
    clearTodo: function() {
      localStorage.clear();
    }
  }
}