<template>
    <div class="dropdown mobile-user-menu">
        <a href="javascript:void(0);" class="nav-link" @click="toggleBtn">
            <font-awesome-icon icon="fa-solid fa-user-circle" class="mn_icon" />
        </a>
        <div
            class="dropdown-menu dropdown-menu-right menu-style"
            :class="{ block: status, hidden: !status }"
        >
            <a class="dropdown-item" href="profile.html">My Profile </a>
            <a class="dropdown-item" href="generalsettings.html">Settings</a>
            <Link :href="route('logout')" method="post" class="dropdown-item">
                Logout</Link
            >
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import useStatus from "@/Composables/status";
const { status, toggleBtn } = useStatus();
</script>

<style scoped>
.menu-style {
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    transform: translate3d(-100px, 70px, 0px);
}
</style>
