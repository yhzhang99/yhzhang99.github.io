<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, k) in filterData"
      :key="k"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleTogglestate"
      @clearCompleted="handleClear"
    ></todo-info>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  let id = 0
  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all',
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return

        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false,
        })

        this.content = ''
      },

      handleDeleteItem(id) {
        this.todoData.splice(
          this.todoData.findIndex((item) => item.id),
          1
        )
      },
      handleTogglestate(state) {
        this.filter = state
      },
      handleClear() {
        this.todoData = this.todoData.filter(item => item.completed == false)
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (item) => item.completed == false
          ).length
        },
      },
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case 'all':
            return this.todoData
          case 'active':
            return this.todoData.filter((item) => item.completed == false)
          case 'completed':
            return this.todoData.filter((item) => item.completed == true)
        }
      },
    },
    components: {
      TodoItem,
      TodoInfo,
    },
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px

    .add-todo
      padding: 16px 16px 16px 36px
      width: 100%
      font-size: 24px
      font-weight: inherit
      font-family: inherit
      color: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>