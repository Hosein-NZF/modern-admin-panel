<template>
    <v-app>
        <LayoutMain />
        <v-main>
            <v-container fluid class="page-wrapper">
                <div class="maxWidth">
                    <NuxtPage />
                </div>
            </v-container>
        </v-main>

        <v-footer class="d-flex justify-center mt-10 bg-grey">
            <p class="text-center">Developed by Hosein Nz</p>
        </v-footer>
    </v-app>
</template>


<script setup lang="ts">

const title = ref("Modern Admin panel");
useHead({
    meta: [{ content: title }],
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `Modern Admin panel - ${titleChunk}`
            : "Modern Admin panel";
    },
});
</script>