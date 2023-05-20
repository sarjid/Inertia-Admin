<template>
    <div>
        <!-- Main Wrapper -->
        <div class="main-wrapper" :class="{ 'slide-nav': status }">
            <!-- Header -->
            <div class="header">
                <!-- Logo -->
                <LogoManager />
                <!-- /Logo -->

                <a class="mobile_btn menu-opened" @click="toggleBtn">
                    <font-awesome-icon
                        :icon="`fa-solid ${
                            status == true ? 'fa-times' : 'fa-bars-staggered'
                        }`"
                        class="mn_icon"
                    />
                </a>

                <!-- Header Menu -->
                <HeaderMenu />

                <!-- /Header Menu -->

                <!-- Mobile Menu -->
                <MobileMenu />
                <!-- /Mobile Menu -->
            </div>
            <!-- Header -->

            <!-- Sidebar -->
            <Sidebar />
            <!-- /Sidebar -->

            <slot />
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>

<script setup>
import HeaderMenu from "./Partials/HeaderMenu.vue";
import MobileMenu from "./Partials/MobileMenu.vue";
import LogoManager from "./Partials/LogoManager.vue";
import Sidebar from "./Partials/Sidebar.vue";

import useStatus from "@/Composables/status";
const { status, toggleBtn } = useStatus();
</script>

<style>
.mn_icon {
    font-size: 32px;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}

.fa-spinner {
    animation: spinner 1s linear infinite;
}

:disabled {
    opacity: 0.8;
    cursor: not-allowed;
}
</style>
