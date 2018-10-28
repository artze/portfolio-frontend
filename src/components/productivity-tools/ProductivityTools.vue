<template>
    <transition name="fade">
        <v-layout justify-center>
            <v-flex xs8 sm8 md8 lg8>
                <h2>Operational Productivity Tools</h2>
            </v-flex>
        </v-layout>
    </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
