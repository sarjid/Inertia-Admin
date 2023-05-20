<template>
    <ul class="nav user-menu">
        <!-- Search -->
        <li class="nav-item">
            <div class="top-nav-search">
                <a href="javascript:void(0);" class="responsive-search">
                    <i class="fa fa-search"></i>
                </a>
                <form action="#">
                    <div class="searchinputs" :class="{ show: search }">
                        <input type="text" placeholder="Search Here ..." />
                        <div class="search-addon">
                            <span @click="toggleBtn('search')"
                                ><img
                                    src="assets/img/icons/closes.svg"
                                    alt="img"
                            /></span>
                        </div>
                    </div>
                    <a class="btn" @click="toggleBtn('search')"
                        ><img src="assets/img/icons/search.svg" alt="img"
                    /></a>
                </form>
            </div>
        </li>
        <!-- /Search -->

        <!-- Flag -->
        <li class="nav-item dropdown has-arrow flag-nav">
            <a
                class="nav-link focus:bg-[#eeeeee]"
                href="javascript:void(0);"
                role="button"
                @click.prevent="toggleBtn('flag')"
            >
                <img src="assets/img/flags/us1.png" alt="" height="20" />
            </a>
            <div
                class="dropdown-menu dropdown-menu-right !translate-x-0 !translate-y-0 !top-[60px] bg-white"
                :class="{ block: flag, hidden: !flag }"
            >
                <a
                    href="javascript:void(0);"
                    class="dropdown-item hover:bg-[#eeeeee]"
                >
                    <img src="assets/img/flags/us.png" alt="" height="16" />
                    English
                </a>
                <a
                    href="javascript:void(0);"
                    class="dropdown-item hover:bg-[#eeeeee]"
                >
                    <img src="assets/img/flags/fr.png" alt="" height="16" />
                    French
                </a>
                <a
                    href="javascript:void(0);"
                    class="dropdown-item hover:bg-[#eeeeee]"
                >
                    <img src="assets/img/flags/es.png" alt="" height="16" />
                    Spanish
                </a>
                <a
                    href="javascript:void(0);"
                    class="dropdown-item hover:bg-[#eeeeee]"
                >
                    <img src="assets/img/flags/de.png" alt="" height="16" />
                    German
                </a>
            </div>
        </li>
        <!-- /Flag -->

        <!-- Notifications -->
        <li class="nav-item dropdown">
            <a
                href="javascript:void(0);"
                class="dropdown-toggle focus:bg-[#eeeeee] nav-link"
                @click="toggleBtn('notify')"
            >
                <img src="assets/img/icons/notification-bing.svg" alt="img" />
                <span class="badge rounded-pill rounded-full">4</span>
            </a>
            <div
                class="dropdown-menu notifications !inset-auto !translate-y-0 !right-0 !top-[60px] bg-white"
                :class="{ block: notify, hidden: !notify }"
            >
                <div class="topnav-dropdown-header">
                    <span class="notification-title">Notifications</span>
                    <a href="javascript:void(0)" class="clear-noti">
                        Clear All
                    </a>
                </div>
                <div class="noti-content">
                    <ul class="notification-list">
                        <li class="notification-message">
                            <a href="activities.html">
                                <div class="media flex">
                                    <span class="avatar flex-shrink-0">
                                        <img
                                            alt=""
                                            src="assets/img/profiles/avatar-02.jpg"
                                        />
                                    </span>
                                    <div class="media-body flex-grow">
                                        <p class="noti-details">
                                            <span class="noti-title"
                                                >John Doe</span
                                            >
                                            added new task
                                            <span class="noti-title"
                                                >Patient appointment
                                                booking</span
                                            >
                                        </p>
                                        <p class="noti-time">
                                            <span class="notification-time"
                                                >4 mins ago</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="notification-message">
                            <a href="activities.html">
                                <div class="media flex">
                                    <span class="avatar flex-shrink-0">
                                        <img
                                            alt=""
                                            src="assets/img/profiles/avatar-03.jpg"
                                        />
                                    </span>
                                    <div class="media-body flex-grow">
                                        <p class="noti-details">
                                            <span class="noti-title"
                                                >Tarah Shropshire</span
                                            >
                                            changed the task name
                                            <span class="noti-title"
                                                >Appointment booking with
                                                payment gateway</span
                                            >
                                        </p>
                                        <p class="noti-time">
                                            <span class="notification-time"
                                                >6 mins ago</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="notification-message">
                            <a href="activities.html">
                                <div class="media flex">
                                    <span class="avatar flex-shrink-0">
                                        <img
                                            alt=""
                                            src="assets/img/profiles/avatar-06.jpg"
                                        />
                                    </span>
                                    <div class="media-body flex-grow">
                                        <p class="noti-details">
                                            <span class="noti-title"
                                                >Misty Tison</span
                                            >
                                            added
                                            <span class="noti-title"
                                                >Domenic Houston</span
                                            >
                                            and
                                            <span class="noti-title"
                                                >Claire Mapes</span
                                            >
                                            to project
                                            <span class="noti-title"
                                                >Doctor available module</span
                                            >
                                        </p>
                                        <p class="noti-time">
                                            <span class="notification-time"
                                                >8 mins ago</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="notification-message">
                            <a href="activities.html">
                                <div class="media flex">
                                    <span class="avatar flex-shrink-0">
                                        <img
                                            alt=""
                                            src="assets/img/profiles/avatar-17.jpg"
                                        />
                                    </span>
                                    <div class="media-body flex-grow">
                                        <p class="noti-details">
                                            <span class="noti-title"
                                                >Rolland Webber</span
                                            >
                                            completed task
                                            <span class="noti-title"
                                                >Patient and Doctor video
                                                conferencing</span
                                            >
                                        </p>
                                        <p class="noti-time">
                                            <span class="notification-time"
                                                >12 mins ago</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="notification-message">
                            <a href="activities.html">
                                <div class="media flex">
                                    <span class="avatar flex-shrink-0">
                                        <img
                                            alt=""
                                            src="assets/img/profiles/avatar-13.jpg"
                                        />
                                    </span>
                                    <div class="media-body flex-grow">
                                        <p class="noti-details">
                                            <span class="noti-title"
                                                >Bernardo Galaviz</span
                                            >
                                            added new task
                                            <span class="noti-title"
                                                >Private chat module</span
                                            >
                                        </p>
                                        <p class="noti-time">
                                            <span class="notification-time"
                                                >2 days ago</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="topnav-dropdown-footer">
                    <a href="activities.html">View all Notifications</a>
                </div>
            </div>
        </li>
        <!-- /Notifications -->

        <li class="nav-item dropdown has-arrow main-drop">
            <a
                href="javascript:void(0);"
                class="focus:bg-[#eeeeee] nav-link userset"
                @click="toggleBtn('profile')"
            >
                <span class="user-img"
                    ><img src="assets/img/profiles/avator1.jpg" alt="" />
                    <span class="status online"></span
                ></span>
            </a>
            <div
                class="dropdown-menu menu-drop-user !inset-auto !translate-y-0 !right-0 !top-[60px] bg-white"
                :class="{ block: profile, hidden: !profile }"
            >
                <div class="profilename">
                    <div class="profileset">
                        <span class="user-img"
                            ><img
                                src="assets/img/profiles/avator1.jpg"
                                alt="" />
                            <span class="status online"></span
                        ></span>
                        <div class="profilesets">
                            <h6>{{ user?.name }}</h6>
                            <h5>{{ user?.email }}</h5>
                        </div>
                    </div>
                    <hr class="!m-0" />
                    <Link class="dropdown-item" :href="route('profile.edit')">
                        <i class="mr-2" data-feather="user"></i> My
                        Profile</Link
                    >

                    <Link
                        class="dropdown-item"
                        :href="route('profile.settings')"
                        ><i class="mr-2"></i>Settings</Link
                    >
                    <hr class="!m-0" />
                    <Link
                        :href="route('logout')"
                        method="post"
                        class="dropdown-item logout !pb-0"
                        href="signin.html"
                        ><img
                            src="assets/img/icons/log-out.svg"
                            class="mr-2"
                            alt="img"
                        />Logout</Link
                    >
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import useStatus from "@/Composables/status";
const { search, flag, notify, profile, toggleBtn } = useStatus();

import { Link, usePage } from "@inertiajs/vue3";

const user = usePage().props.auth.user;
</script>
