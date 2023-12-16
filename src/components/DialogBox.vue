<template>
  <div class="dialog-box">
    <ul>
      <li v-for="msg in props.dialogMessage" :key="msg">{{ msg }}</li>
    </ul>
    <!-- <p v-for="msg in props.dialogMessage" :key="msg">{{ msg }}</p> -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  dialogMessage: string[];
}

const props = withDefaults(defineProps<Props>(), {
  dialogMessage: () => [],
});
</script>

<style scoped lang="scss">
ul {
  list-style-type: disc;
}
</style>
