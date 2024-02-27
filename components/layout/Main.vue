<template>
    <!------Sidebar-------->
    <v-navigation-drawer left elevation="0" app class="leftSidebar" v-model="sDrawer">
        <!---Logo part -->
        <div class="pa-5">
            <LayoutLogo />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <div>
            <perfect-scrollbar class="scrollnavbar">
                <v-list class="pa-6">
                    <!---Menu Loop -->
                    <template v-for="(item, i) in sidebarMenu">
                        <!---Item Sub Header -->
                        <LayoutVerticalSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />

                        <!---Single Item-->
                        <LayoutVerticalSidebarNavItem :item="item" v-else class="leftPadding" />
                        <!---End Single Item-->
                    </template>
                </v-list>
            </perfect-scrollbar>

            <v-list-item class="px-8 logout-item" to="/auth/login">
                <template #prepend>
                    <LogoutIcon size="20" stroke-width="1.5" class="iconClass" color="red" />
                </template>

                <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
        </div>

    </v-navigation-drawer>
    <!------Header-------->
    <v-app-bar elevation="0" height="70">
        <div class="d-flex align-center justify-space-between w-100">
            <div>
                <v-btn class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="sDrawer = !sDrawer" icon
                    variant="flat" size="small">
                    <Menu2Icon size="20" stroke-width="1.5" />
                </v-btn>
                <!-- Notification -->
                <LayoutLogoVerticalHeaderNotificationDD />
            </div>
            <div>
                <!-- User Profile -->
                <LayoutLogoVerticalHeaderProfileDD />
            </div>
        </div>
    </v-app-bar>
</template>


<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import sidebarItems from '@/components/layout/vertical-sidebar/sidebarItem';
import { Menu2Icon, LogoutIcon } from 'vue-tabler-icons';

const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
</script>