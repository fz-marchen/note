<template>
  <div>
    <p>
      <span class="text">点击次数:</span>
      <span>{{ count }}</span>
    </p>
    <div @click="onClick">count++</div>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    function onClick() {
      count.value++;
    }
    return {
      count,
      onClick,
    };
  },
};
</script>

<style >
.text {
  font-size: 14px;
}
</style>