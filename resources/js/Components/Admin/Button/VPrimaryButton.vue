<template>
    <button :type="type" class="btn btn-primary"><slot /></button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: "button",
    },
});
</script>
