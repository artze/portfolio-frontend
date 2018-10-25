<template>
    <transition name="fade">
        <v-layout column style="height: 100vh;" ref="contactSection">
            <v-flex xs1 sm1 md1 lg1>
                <v-layout justify-center>
                    <v-flex lg8>
                        <h2 class="section-header">
                            Contact Me
                        </h2>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs8 sm8 md8 lg8>
                <v-layout column fill-height justify-center align-center>
                    <v-flex xs3 sm3 md3 lg3>
                        <p class="contact-text">Get in touch. Tell me about your project.</p>
                    </v-flex>
                    <v-vlex xs9 sm9 md9 lg9>
                        <v-btn icon href="https://www.linkedin.com/in/arthur-wong/" target="_blank" class="contact-me-btn">
                            <v-icon x-large>fab fa-linkedin</v-icon>
                        </v-btn>
                    </v-vlex>
                </v-layout>
            </v-flex>

            <v-flex xs3 sm3 md3 lg3>
                <v-layout fill-height justify-center class="footer">
                    <v-flex xs8 sm8 md8 lg8>
                        <v-layout column fill-height justify-end>
                            <p class="png-source">
                                Icons made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>
                            </p>
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

.section-header {
    text-align: center;
    font-family: 'VT323';
    font-weight: 200;
    font-size: 2.2em;
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
</style>
