import { ref } from "vue";
export default function useStatus() {
    const status = ref(false);
    const search = ref(false);
    const flag = ref(false);
    const notify = ref(false);
    const sidebar = ref(false);
    const profile = ref(false);

    function toggleBtn(name) {
        if (name === "search") {
            search.value = !search.value;
        } else if (name === "flag") {
            flag.value = !flag.value;
        } else if (name === "notify") {
            notify.value = !notify.value;
        } else if (name === "sidebar") {
            sidebar.value = !sidebar.value;
        } else if (name === "profile") {
            profile.value = !profile.value;
        }

        status.value = !status.value;
    }

    return {
        status,
        search,
        flag,
        notify,
        sidebar,
        profile,
        toggleBtn,
    };
}
