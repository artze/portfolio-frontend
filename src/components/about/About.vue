<template>
    <transition name="fade">
        <v-layout column style="height: 100vh" ref="aboutSection">
            <v-flex xs2 sm2 md1 lg1>
                <!-- Blank to keep content centered vertically -->
            </v-flex>

            <v-flex xs9 sm9 md9 lg9>
                <v-layout column justify-center style="height: 100%;">
                    <about-content></about-content>
                </v-layout>
            </v-flex>

            <v-flex xs2 sm2 md2 lg2>
                <v-layout fill-height align-end>
                    <v-flex xs6 sm6 md6 lg6>
                        <v-layout justify-start>
                            <v-btn flat large class="link-btn large" to="/">Prev</v-btn>
                        </v-layout>
                    </v-flex>
                    <v-flex xs6 sm6 md6 lg6>
                        <v-layout justify-end>
                            <v-btn flat large class="link-btn large" to="/projects/work">Next<span class="blink">.</span></v-btn>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </transition>
</template>

<script>
import AboutContent from './AboutContent'

export default {
    components: {
        'about-content': AboutContent
    }
}
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 2s;
}

.fade-enter {
    opacity: 0;
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

@media only screen and (max-width : 600px) {
    .link-btn.large {
        font-size: 2em;
    }
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
