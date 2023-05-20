<template>
    <label v-if="value">{{ value }}</label>
</template>

<script setup>
defineProps(["value"]);
</script>
