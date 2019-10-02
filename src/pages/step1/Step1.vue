<template>
  <div id="app">
    <div class="wrap">
      <h1>STEP1</h1>
      <div>
        <p>メールアドレス</p>
        <input type="text" v-model="mailValue">
        <p><button @click="updateMail">次へ</button></p>
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
      mailValue: ''
    }
  },
  methods: {
    updateMail () {
      this.$store.commit('updateMail', this.mailValue)
      window.location.href = "./step2.html"
    }
  }
}
</script>