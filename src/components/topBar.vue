<template>
  <div class="topBar">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
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
@import '../style/virables.scss';
.topBar {
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0.49rem;
  border-bottom: 0.01rem solid $content-bgColor;
}
</style>
