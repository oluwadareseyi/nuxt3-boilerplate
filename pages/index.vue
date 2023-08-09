<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const localCount = ref(0);

const store = useGlobalStore();

const click = () => {
    store.increment();
    localCount.value++;
};
</script>

<template>
    <h1>Welcome to home</h1>
    <p>Global Count: {{ store.count }}</p>
    <p>Global Double Count: {{ store.doubleCount }}</p>
    <p>Local Count: {{ localCount }}</p>
    <ButtonComponent :loading="false" button-type="primary" @click="click"> Increment </ButtonComponent>
</template>

<style></style>
