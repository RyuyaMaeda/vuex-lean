<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done" />
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    tasks() {
      console.log(this.$store.state.tasks);
      return this.$store.state.tasks;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
