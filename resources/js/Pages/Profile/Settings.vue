<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Head title="Settings" />

    <AppLayout>
        <div class="page-wrapper">
            <div class="content">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm class="max-w-xl" />
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
