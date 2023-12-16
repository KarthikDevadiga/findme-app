<template>
  <div class="dialog-box">
    <p v-for="msg in props.dialogMessage" :key="msg">{{ msg }}</p>
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
