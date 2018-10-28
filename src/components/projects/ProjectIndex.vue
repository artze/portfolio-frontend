<template>
    <v-layout column style="height: 100vh">
        <v-flex xs1 sm1 md1 lg1>
            <v-layout justify-center>
                <v-flex lg8>
                    <h2 class="section-header">
                        Work Projects
                    </h2>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs4 sm4 md4 lg4>
            <work-project-cards></work-project-cards>
        </v-flex>
        <v-flex xs1 sm1 md1 lg1>
            <v-layout justify-center>
                <v-flex lg8>
                    <h2 class="section-header">
                        Hobby Projects
                    </h2>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex xs4 sm4 md4 lg4>
            <hobby-project-cards></hobby-project-cards>
        </v-flex>

        <v-flex xs2 sm2 md2 lg2>
            <v-layout fill-height justify-end align-center>
                <v-btn flat large class="link-btn large" to="/contact">Next<span class="blink">.</span></v-btn>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import WorkProjectCards from './WorkProjectCards'
import HobbyProjectCards from './HobbyProjectCards'

export default {
    components: {
        'work-project-cards': WorkProjectCards,
        'hobby-project-cards': HobbyProjectCards
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');

.section-header {
    text-align: left;
    font-family: 'VT323';
    font-weight: 200;
    font-size: 3em;
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
