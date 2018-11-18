<template>
    <v-layout column style="height: 100vh;">
        <v-flex xs2 sm2 md1 lg1>
            <!-- Blank to keep content centered vertically -->
        </v-flex>

        <v-flex xs9 sm9 md9 lg9>
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
