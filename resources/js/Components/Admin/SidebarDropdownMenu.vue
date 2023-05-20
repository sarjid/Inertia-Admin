<template>
    <li class="submenu">
        <a
            href="javascript:void(0);"
            class="active"
            :class="{ subdrop: sidebar }"
            @click="toggleBtn('sidebar')"
        >
            <img :src="iconImg" alt="img" /><span> {{ title }}</span>
            <span class="menu-arrow"></span
        ></a>

        <ul :class="{ block: sidebar, hidden: !sidebar }">
            <slot></slot>
        </ul>
    </li>
</template>

<script setup>
import useStatus from "@/Composables/status";
const props = defineProps({
    title: {
        type: String,
        default: "Sidebar Name",
    },

    iconImg: {
        type: String,
        default: "/assets/img/icons/dashboard.svg",
    },
});
const { sidebar, toggleBtn } = useStatus();
</script>

<style>
.slide-enter,
.slide-leave-to {
    transform: scaleY(0);
}
</style>
