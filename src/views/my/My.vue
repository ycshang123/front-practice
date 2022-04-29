<template>
  <div>
    <top-bar title="我的" />
    <router-link to="/login">去登陆</router-link>
  </div>
</template>

<script>
import topBar from '@/components/topBar.vue'
export default {
  name: 'MyPage',
  data() {
    return {}
  },
  components: {
    topBar
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
