<template>
    <div>
        <!-- Landing section -->
        <v-layout column id="landing-background">
            <v-layout justify-end>
                <v-btn flat @click="scrollToProjectsSection" class="link-btn">Projects</v-btn>
                <v-btn flat @click="scrollToContactSection" class="link-btn">Contact</v-btn>
            </v-layout>
            <v-layout align-center justify-center>
                <v-flex lg4 class="landing-content" >
                    <img src="../../assets/images/coloredsquares.jpg">
                </v-flex>
                <v-flex lg5 class="landing-content" >
                    <h1>artze</h1>
                    <h3>Fullstack Web Developer<span class="blink">.</span></h3>
                </v-flex>
            </v-layout>
            <v-layout justify-center align-end>
                <v-btn icon large @click="scrollToProjectsSection">
                    <v-icon x-large class="scroll-icon">expand_more</v-icon>
                </v-btn>
            </v-layout>
        </v-layout>

        <!-- Projects section -->
        <div style="height: 100vh" ref="projectsSection">
            <v-layout justify-center>
                <v-flex lg6>
                    <h2 class="section-header">
                        Projects section
                    </h2>
                </v-flex>
            </v-layout>
            <v-layout justify-center class="mt-5">
                <v-flex lg8>
                    <v-layout justify-start wrap>
                        <v-flex lg4>
                            <v-card class="project-card">
                                <v-card-title primary-title class="justify-center">
                                    <router-link to="/quote-machine" tag="h3" class="project-card-title-text">Quote Machine</router-link>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                        <v-flex lg4>
                            <v-card class="project-card">
                                <v-card-title primary-title class="justify-center">
                                    <router-link to="/wiki-viewer" tag="h3" class="project-card-title-text">Wikipedia Viewer</router-link>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                        <v-flex lg4>
                            <v-card class="project-card">
                                <v-card-title primary-title class="justify-center">
                                    <router-link to="/journey-tracker" tag="h3" class="project-card-title-text">Journey Tracker</router-link>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </div>

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
                    <v-btn icon href="https://www.linkedin.com/in/arthur-wong/" target="_blank">
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
export default {
    methods: {
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

.landing-content img {
    height: 200px;
    width: 200px;
}

.landing-content h1 {
    font-family: 'Raleway';
    font-size: 6em;
    font-weight: 800;
    text-align: left;
    line-height: 1.2em;
    animation: 1s ease-out 0s 1 slideFromRight;
}

.landing-content h3 {
    font-family: 'VT323', monospace;
    font-weight: 200;
    font-size: 2.7em;
    text-align: left;
    animation: 1s ease-out 0s 1 slideFromRight;
}

.section-header {
    text-align: center;
    font-family: 'VT323';
    font-weight: 200;
    font-size: 2.2em;
    margin-top: 1em;
}

.project-card {
    margin: 0px 15px;
}

.project-card-title-text {
    font-family: 'Raleway';
    font-size: 1.1em;
    font-weight: 400;
}

.project-card-title-text:hover {
    text-decoration: underline;
    cursor: pointer;
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

.scroll-icon:hover {
    color: #69ffdf;
}

.blink {
    animation: blink 1s linear infinite;
}
</style>
