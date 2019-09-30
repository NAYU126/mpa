<template>
  <div id="app">
    <h1>STEP1</h1>
    <div>
      <p>メールアドレス</p>
      <input type="text">
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['name'])
  },
}
</script>