<template>
  <div id="app">
    <div class="wrap">
      <h1>STEP2</h1>
      <div>
        <p>名前</p>
        <input type="text" v-model="nameValue">
        <p><button @click="updateName">次へ</button></p>
      </div>
    </div>
  </div>
</template>

<style>
.wrap {
  text-align: center;
}
</style>

<script>
export default {
  data () {
    return {
      nameValue: ''
    }
  },
  methods: {
    updateName () {
      this.$store.commit('updateName', this.nameValue)
      window.location.href = "./confirm.html"
    }
  }
}
</script>