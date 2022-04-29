<template>
  <div class="topBar">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  props: {
    title: String
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../style/virables.scss";
.topBar {
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: .49rem;
  border-bottom: .01rem solid $content-bgColor;
}
</style>
