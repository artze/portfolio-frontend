<template>
    <transition name="fade">
        <v-layout column style="height: 100vh;" ref="contactSection">
            <v-flex xs3 sm3 md3 lg3>
                <v-layout justify-center>
                    <v-flex lg8>
                        <h2 class="contact-header">
                            Get in touch...
                        </h2>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs7 sm7 md7 lg7>
                <v-layout column fill-height justify-center align-center>
                    <v-flex xs3 sm3 md3 lg3>
                        <p class="contact-text">Tell me about your project. Contact me on LinkedIn</p>
                    </v-flex>
                    <v-flex xs9 sm9 md9 lg9>
                        <v-btn icon href="https://www.linkedin.com/in/arthur-wong/" target="_blank" class="contact-me-btn">
                            <v-icon x-large>fab fa-linkedin</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs2 sm2 md2 lg2>
                <v-layout fill-height justify-center class="footer">
                    <v-flex xs8 sm8 md8 lg8>
                        <v-layout column fill-height justify-end>
                            <v-flex lg10>
                                <v-layout justify-center>
                                    <v-btn flat large class="link-btn large" to="/">Back to Home<span class="blink">.</span></v-btn>
                                </v-layout>
                            </v-flex>
                            <v-flex lg2>
                                <p class="png-source">
                                    Icons made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>
                                </p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
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

.contact-header {
    font-family: 'VT323';
    font-weight: 200;
    font-size: 5em;
    margin-top: 1em;
}

.contact-me-btn::before {
    color: transparent;
}

.contact-me-btn:hover {
    color: #69ffdf;
}

.png-source {
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 0.65em;
    color: #ffffff;
}

.png-source a {
    color: #a3a0a0;
}

.contact-text {
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 1.5em;
    color: #757575
}

.footer {
    background-color: #000000;
}

.link-btn {
    color: #ffffff;
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
