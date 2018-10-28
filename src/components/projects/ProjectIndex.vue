<template>
    <v-layout column style="height: 100vh">
        <v-flex xs1 sm1 md1 lg1>
            <v-layout justify-center>
                <v-flex lg8>
                    <h2 class="section-header">
                        Projects
                    </h2>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex xs9 sm9 md9 lg9>
            <project-cards></project-cards>
        </v-flex>

        <v-flex xs2 sm2 md2 lg2>
            <v-layout fill-height justify-end align-center>
                <v-btn flat large class="link-btn large" to="/contact">Next<span class="blink">.</span></v-btn>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import ProjectCards from './ProjectCards'

export default {
    components: {
        'project-cards': ProjectCards
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');

.section-header {
    text-align: center;
    font-family: 'VT323';
    font-weight: 200;
    font-size: 2.2em;
    margin-top: 1em;
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
