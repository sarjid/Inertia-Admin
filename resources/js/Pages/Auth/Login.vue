<script setup>
import { ref } from "vue";

import VInputLabel from "@/Components/Admin/Form/VInputLabel.vue";
import VTextInput from "@/Components/Admin/Form/VTextInput.vue";
import VPrimaryButton from "@/Components/Admin/Button/VPrimaryButton.vue";
import { Head, useForm } from "@inertiajs/vue3";

import { Form } from "vee-validate";
import * as yup from "yup";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

//toggle password
const showPassword = ref(false);
const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

// const submit = () => {
//     form.post(route("login"), {
//         onFinish: () => form.reset("password"),
//     });
// };

const schema = yup.object({
    email: yup.string().email().required("The email field is required"),
    password: yup.string().required("The password field is required"),
});

/**
 *use for veevalidate
 *submit form
 */
const onSubmit = (values, actions) => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
        onError: () => {
            actions.setErrors(form.errors);
        },
    });
};
</script>

<template>
    <div>
        <Head title="Log in" />

        <!-- Main Wrapper -->
        <div class="main-wrapper">
            <div class="account-content">
                <div class="login-wrapper">
                    <div class="login-content">
                        <div class="login-userset">
                            <Form
                                @submit="onSubmit"
                                :validation-schema="schema"
                                v-slot="{ meta, isSubmitting }"
                            >
                                <div class="login-logo logo-normal">
                                    <img src="assets/img/logo.png" alt="img" />
                                </div>

                                <div class="login-userheading">
                                    <h3>Sign In</h3>
                                    <h4>Please login to your account</h4>
                                </div>
                                <div class="form-login">
                                    <div class="form-addons">
                                        <VInputLabel
                                            for="email"
                                            value="Email"
                                        />
                                        <VTextInput
                                            type="email"
                                            id="email"
                                            v-model="form.email"
                                            name="email"
                                            placeholder="Enter your email address "
                                        />
                                    </div>
                                </div>
                                <div class="form-login">
                                    <VInputLabel
                                        for="password"
                                        value="Password"
                                    />
                                    <div class="pass-group">
                                        <VTextInput
                                            :type="
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            id="password"
                                            v-model="form.password"
                                            name="password"
                                            placeholder="Enter your password"
                                        />

                                        <span
                                            @click="togglePassword"
                                            class="fas toggle-password mr-8"
                                            :class="{
                                                'fa-eye': showPassword,
                                                'fa-eye-slash': !showPassword,
                                            }"
                                        ></span>
                                    </div>
                                </div>
                                <div class="form-login">
                                    <div class="alreadyuser">
                                        <h4>
                                            <a
                                                href="forgetpassword.html"
                                                class="hover-a"
                                                >Forgot Password?</a
                                            >
                                        </h4>
                                    </div>
                                </div>
                                <div class="form-login">
                                    <VPrimaryButton
                                        type="submit"
                                        class="btn-login"
                                        :disabled="
                                            form.processing || isSubmitting
                                        "
                                    >
                                        <font-awesome-icon
                                            v-show="
                                                isSubmitting || form.processing
                                            "
                                            icon="fa-solid fa-spinner "
                                        />
                                        Log In</VPrimaryButton
                                    >
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div class="login-img">
                        <img src="assets/img/drug.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>
