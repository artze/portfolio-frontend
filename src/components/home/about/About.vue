<template>
    <v-layout column style="height: 100vh;">
        <v-flex xs12 sm12 md12 lg12>
            <v-layout column justify-center style="height: 100%;">
                <about-content></about-content>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import AboutContent from './AboutContent'

export default {
    components: {
        'about-content': AboutContent
    }
}
</script>
