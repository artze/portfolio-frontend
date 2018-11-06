<template>
    <v-layout column style="height: 100vh">
        <v-flex xs1 sm1 md1 lg1>
            <!-- Blank to keep content centered vertically -->
        </v-flex>

        <v-flex xs9 sm9 md9 lg9>
            <v-layout column justify-center style="height: 100%;">
                <v-flex xs1 sm1 md1 lg1>
                    <v-layout justify-center>
                        <v-flex xs10 sm10 md10 lg10>
                            <h2 class="section-header">
                                Hobby Projects
                            </h2>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex lg1>
                    <hobby-project-cards></hobby-project-cards>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex xs2 sm2 md2 lg2>
            <v-layout fill-height align-center>
                <v-flex xs6 sm6 md6 lg6>
                    <v-layout justify-start>
                        <v-btn flat large class="link-btn large" to="/projects/work">Prev</v-btn>
                    </v-layout>
                </v-flex>
                <v-flex xs6 sm6 md6 lg6>
                    <v-layout justify-end>
                        <v-btn flat large class="link-btn large" to="/contact">Next<span class="blink">.</span></v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import HobbyProjectCards from './HobbyProjectCards'

export default {
    components: {
        'hobby-project-cards': HobbyProjectCards
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');

.section-header {
    text-align: left;
    font-family: 'VT323';
    font-weight: 400;
    font-size: 6em;
}

.link-btn {
    font-family: 'VT323';
    font-size: 1.5em;
    font-weight: 400;
    text-transform: none;
}

.link-btn.large {
    height: 100px;
    font-size: 3em;
}

.link-btn:hover {
    color: #69ffdf;
}

.link-btn::before {
    color: transparent;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.blink {
    animation: blink 1s linear infinite;
}
</style>
