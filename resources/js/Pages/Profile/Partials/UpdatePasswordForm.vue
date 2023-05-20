<script setup>
import VInputLabel from "@/Components/Admin/Form/VInputLabel.vue";
import VTextInput from "@/Components/Admin/Form/VTextInput.vue";
import VPrimaryButton from "@/Components/Admin/Button/VPrimaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";
import { Form } from "vee-validate";
import { object, string, ref as yupRef } from "yup";

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const schema = object({
    current_password: string().required(
        "The current password field is required"
    ),
    password: string()
        .required("The password field is required")
        .min(8)
        .max(55),
    password_confirmation: string()
        .required("The password confirmation field is required")
        .oneOf(
            [yupRef("password")],
            "Password and password confirmation do not match"
        ),
});

/**
 *use for veevalidate
 *submit form
 */
const onSubmit = (values, actions) => {
    form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => form.reset(),

        onError: () => {
            actions.setErrors(form.errors);
        },
    });
};

// const updatePassword = () => {
//     form.put(route("password.update"), {
//         preserveScroll: true,
//         onSuccess: () => form.reset(),
//         onError: () => {
//             if (form.errors.password) {
//                 form.reset("password", "password_confirmation");
//                 passwordInput.value.focus();
//             }
//             if (form.errors.current_password) {
//                 form.reset("current_password");
//                 currentPasswordInput.value.focus();
//             }
//         },
//     });
// };
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Update Password</h2>

            <p class="mt-1 text-sm text-gray-600">
                Ensure your account is using a long, random password to stay
                secure.
            </p>
        </header>

        <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ meta, isSubmitting }"
            class="mt-6 space-y-6"
        >
            <div>
                <VInputLabel for="current_password" value="Current Password" />

                <VTextInput
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    name="current_password"
                    placeholder="current-password"
                />
            </div>

            <div>
                <VInputLabel for="password" value="New Password" />

                <VTextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    name="password"
                    placeholder="new-password"
                />
            </div>

            <div>
                <VInputLabel
                    for="password_confirmation"
                    value="Confirm Password"
                />

                <VTextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    name="password_confirmation"
                    placeholder="retype-password"
                />
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
