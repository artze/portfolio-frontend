<template>
    <div>
        <!-- Landing section -->
        <v-layout column id="landing-background">
            <v-layout justify-end>
                <v-btn flat @click="scrollToAboutSection" class="link-btn">About</v-btn>
                <v-btn flat @click="scrollToProjectsSection" class="link-btn">Projects</v-btn>
                <v-btn flat @click="scrollToContactSection" class="link-btn">Contact</v-btn>
            </v-layout>
            <v-layout
                align-center
                :justify-center="$vuetify.breakpoint.mdAndUp"
                :justify-space-between="$vuetify.breakpoint.smAndDown"
                :column="$vuetify.breakpoint.smAndDown">
                <v-flex xs6 sm6 lg4 class="landing-content">
                    <img src="../../assets/images/coloredsquares.jpg">
                </v-flex>
                <v-flex xs8 sm8 lg5 class="landing-content">
                    <h1 class="landing-header-font">artze</h1>
                    <h3 class="landing-description-font">Fullstack Web Developer<span class="blink">.</span></h3>
                </v-flex>
            </v-layout>
            <v-layout justify-center align-end>
                <v-btn icon large class="scroll-btn" @click="scrollToAboutSection">
                    <v-icon x-large>expand_more</v-icon>
                </v-btn>
            </v-layout>
        </v-layout>

        <!-- About section -->
        <v-layout column style="height: 100vh" ref="aboutSection">
            <v-flex xs1 sm1 md1 lg1>
                <v-layout justify-center>
                    <v-flex lg8>
                        <h2 class="section-header">
                        </h2>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs10 sm10 md10 lg10>
                <about-content></about-content>
            </v-flex>

            <v-flex xs1 sm1 md1 lg1>
                <v-layout justify-center align-end>
                    <v-btn icon large class="scroll-btn" @click="scrollToProjectsSection">
                        <v-icon x-large>expand_more</v-icon>
                    </v-btn>
                </v-layout>
            </v-flex>
        </v-layout>

        <!-- Projects section -->
        <v-layout column style="height: 100vh" ref="projectsSection">
            <v-flex xs1 sm1 md1 lg1>
                <v-layout justify-center>
                    <v-flex lg8>
                        <h2 class="section-header">
                            Projects
                        </h2>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs10 sm10 md10 lg10>
                <project-cards-section></project-cards-section>
            </v-flex>

            <v-flex xs1 sm1 md1 lg1>
                <v-layout justify-center align-end>
                    <v-btn icon large class="scroll-btn" @click="scrollToContactSection">
                        <v-icon x-large>expand_more</v-icon>
                    </v-btn>
                </v-layout>
            </v-flex>
        </v-layout>

        <!-- Contact section -->
        <div style="height: 100vh;" ref="contactSection">
            <v-layout column fill-height>
                <v-layout justify-center>
                    <v-flex lg6>
                        <h2 class="section-header">
                            Contact Me
                        </h2>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center>
                    <v-btn icon href="https://www.linkedin.com/in/arthur-wong/" target="_blank" class="contact-me-btn">
                        <v-icon x-large>fab fa-linkedin</v-icon>
                    </v-btn>
                </v-layout>
                <v-layout>
                </v-layout>
            </v-layout>
        </div>
    </div>
</template>

<script>
import AboutContent from './AboutContent'
import ProjectCardsSection from './ProjectCardsSection'

export default {
    components: {
        'about-content': AboutContent,
        'project-cards-section': ProjectCardsSection
    },
    methods: {
        scrollToAboutSection() {
            this.$refs.aboutSection.scrollIntoView({
                behavior: 'smooth'
            })
        },
        scrollToProjectsSection() {
            this.$refs.projectsSection.scrollIntoView({
                behavior: 'smooth'
            })
        },
        scrollToContactSection() {
            this.$refs.contactSection.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');
@import url('https://fonts.googleapis.com/css?family=Raleway:400,800');

/* Header Section */
@keyframes fadeIntoView {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideFromRight {
    0% {
        transform: translateX(8%);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

#landing-background {
    height: 100vh;
    background-image: url('../../assets/images/axiom-pattern.png');
    background-repeat: repeat;
    background-attachment: fixed;
}

.landing-content {
    text-align: right;
    padding: 0em 1.5em;
    animation: 2s ease-out 0s 1 fadeIntoView;
}

@media only screen and (max-width : 600px) {
    .landing-content img {
        height: 110px;
        width: 110px;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .landing-content img {
        height: 150px;
        width: 150px;
    }
}

@media only screen and (min-width : 960px) {
    .landing-content img {
        height: 200px;
        width: 200px;
    }
}

.landing-content h1 {
    font-family: 'Raleway';
    font-weight: 800;
    line-height: 1.2em;
    animation: 1s ease-out 0s 1 slideFromRight;
}

@media only screen and (max-width : 960px) {
    .landing-header-font {
        font-size: 4em;
        text-align: center;
    }
}

@media only screen and (min-width: 960px) {
    .landing-header-font {
        font-size: 6em;
        text-align: left;
    }
}

.landing-content h3 {
    font-family: 'VT323', monospace;
    font-weight: 200;
    text-align: left;
    animation: 1s ease-out 0s 1 slideFromRight;
}

@media only screen and (max-width : 960px) {
    .landing-description-font {
        font-size: 2em;
    }
}

@media only screen and (min-width : 960px) {
    .landing-description-font {
        font-size: 2.7em;
    }
}

.link-btn {
    font-family: 'VT323';
    font-size: 1.5em;
    font-weight: 400;
    text-transform: none;
}

.link-btn:hover {
    color: #69ffdf;
}

.link-btn::before {
    color: transparent;
}

.scroll-btn:hover {
    color: #69ffdf;
}

.blink {
    animation: blink 1s linear infinite;
}

/* Project and Contact Sections */
.section-header {
    text-align: center;
    font-family: 'VT323';
    font-weight: 200;
    font-size: 2.2em;
    margin-top: 1em;
}

/* Contact Section */
.contact-me-btn::before {
    color: transparent;
}

.contact-me-btn:hover {
    color: #69ffdf;
}
</style>
