<template>
  <h1>Welcome to home</h1>
  <ButtonComponent :loading="false" button-type="primary" @click="click">
    Hello
  </ButtonComponent>
</template>

<script lang="ts" setup>
const click = () => {
  console.log("clicked");
};
</script>

<style></style>
