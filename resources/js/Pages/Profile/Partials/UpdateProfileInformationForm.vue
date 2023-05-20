<script setup>
import VInputLabel from "@/Components/Admin/Form/VInputLabel.vue";
import VTextInput from "@/Components/Admin/Form/VTextInput.vue";
import VPrimaryButton from "@/Components/Admin/Button/VPrimaryButton.vue";
import { Link, useForm, usePage } from "@inertiajs/vue3";
import { Form } from "vee-validate";
import * as yup from "yup";

const props = defineProps({
    mustVerifyEmail: Boolean,
    status: String,
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});

/**
 *use for veevalidate
 *validate form
 *submit form
 */

const schema = yup.object({
    name: yup.string().required("The name field is required"),
    email: yup.string().required("The email field is required"),
});

/**
 *use for veevalidate
 *submit form
 */
const onSubmit = (values, actions) => {
    form.patch(route("profile.update"), {
        onSuccess: () => {
            // formReset();
        },

        onError: () => {
            actions.setErrors(form.errors);
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">
                Profile Information
            </h2>

            <p class="mt-1 text-sm text-gray-600">
                Update your account's profile information and email address.
            </p>
        </header>

        <Form
            @submit="onSubmit"
            :validation-schema="schema"
            :initial-values="form"
            v-slot="{ meta, isSubmitting }"
            class="mt-6 space-y-6"
        >
            <div class="from-group">
                <VInputLabel for="name" value="Name" />
                <VTextInput
                    type="text"
                    id="name"
                    v-model="form.name"
                    name="name"
                    placeholder="your name"
                />
            </div>

            <div>
                <VInputLabel for="email" value="Email" />

                <VTextInput
                    type="text"
                    id="email"
                    v-model="form.email"
                    name="email"
                    placeholder="your email"
                />
            </div>

            <div
                v-if="props.mustVerifyEmail && user.email_verified_at === null"
            >
                <p class="text-sm mt-2 text-gray-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="props.status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <VPrimaryButton
                    type="submit"
                    :disabled="form.processing || isSubmitting"
                >
                    <font-awesome-icon
                        v-show="isSubmitting || form.processing"
                        icon="fa-solid fa-spinner "
                    />
                    Update</VPrimaryButton
                >

                <Transition
                    enter-from-class="opacity-0"
                    leave-to-class="opacity-0"
                    class="transition ease-in-out"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="text-sm text-gray-600"
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </Form>
    </section>
</template>
