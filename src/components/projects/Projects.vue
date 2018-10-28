<template>
    <transition name="fade">
        <router-view></router-view>
    </transition>
</template>

<style scoped>
.fade-enter-active {
    transition: opacity 2s;
}

.fade-enter {
    opacity: 0;
}
</style>
