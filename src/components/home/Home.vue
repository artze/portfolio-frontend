<template>
    <div>
        <!-- Landing section -->
        <v-layout column id="landing-background">
            <v-flex xs1 sm1 md1 lg1>
                <v-layout :justify-end="$vuetify.breakpoint.smAndUp" :justify-center="$vuetify.breakpoint.xsOnly" class="link-btn-section">
                    <div @click="scrollToAboutSection" class="link-btn">About</div>
                    <div @click="scrollToProjectsSection" class="link-btn">Projects</div>
                    <div @click="scrollToContactSection" class="link-btn">Contact</div>
                </v-layout>
            </v-flex>

            <v-flex xs11 sm11 md11 lg11>
                <v-layout
                    style="height: 100%;"
                    align-center
                    justify-center>
                    <v-flex xs8 sm8 lg8 class="landing-content">
                        <h1>Hi, I am <span style="color: #c52318;">Arthur</span></h1>
                        <h1 class="subheader">A Fullstack Software Developer<span class="blink">.</span></h1>
                    </v-flex>
                </v-layout>
            </v-flex>

        </v-layout>

        <!-- About section -->
        <div ref="aboutSection">
            <about></about>
        </div>

        <!-- Projects section -->
        <div ref="projectsSection">
            <projects></projects>
        </div>

        <!-- Contact section -->
        <div ref="contactSection">
            <contact></contact>
        </div>
    </div>
</template>

<script>
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

export default {
    components: {
        'about': About,
        'projects': Projects,
        'contact': Contact
    },
    methods: {
        scrollToAboutSection() {
            this.$refs.aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        },
        scrollToProjectsSection() {
            this.$refs.projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
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
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,800');

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
    animation: 2s ease-out 0s 1 fadeIntoView;
}

.landing-content h1 {
    font-family: 'Raleway';
    font-weight: 800;
    font-size: 4em;
    line-height: 1.2em;
    animation: 1s ease-out 0s 1 slideFromRight;
}

@media only screen and (max-width : 400px) {
    .landing-content h1 {
        font-size: 1.8em;
    }

    .landing-content h1.subheader {
        font-size: 1.4em;
    }
}

@media only screen and (min-width : 400px) and (max-width : 600px) {
    .landing-content h1 {
        font-size: 2em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .landing-content h1 {
        font-size: 3em;
    }
}

.link-btn-section {
    margin-right: 1em;
}

.link-btn {
    min-width: 150px;
    text-align: center;
    margin-top: 1em;
    margin-right: 0.5em;
    padding: 10px 20px;
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
    font-family: 'Roboto';
    font-size: 1.5em;
    font-weight: 600;
    color: #c52318;
}

.link-btn:hover {
    cursor: pointer;
    box-shadow: 0.5em 0.5em 0 0 #69ffdf, 0 0 0 1px #69ffdf inset;
    transform: translate(-2px, -2px);
    color: #000000;
}

@media only screen and (max-width : 600px) {
    .link-btn-section {
        margin-right: 0;
    }
    .link-btn {
        min-width: 100px;
        font-size: 1em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .link-btn {
        min-width: 100px;
        font-size: 1em;
    }
}

.blink {
    animation: blink 1s linear infinite;
}
</style>
