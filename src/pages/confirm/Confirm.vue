<template>
  <div id="app">
    <div class="wrap">
      <h1>確認画面</h1>
      <p>{{ name }}</p>
      <p>{{ mail }}</p>
      <button @click="signUp">登録</button>
    </div>
  </div>
</template>

<style>
.wrap {
  text-align: center;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["name", "mail"])
  },
  methods: {
    signUp () {
      window.location.href = "./complete.html"
    }
  }
}
</script>