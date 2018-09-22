<template>
    <div>
        <app-header></app-header>
        <v-layout>
            content
        </v-layout>
    </div>
</template>

<script>
import Header from './Header'

export default {
    components: {
        'app-header': Header
    }
}
</script>
