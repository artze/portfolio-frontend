<template>
    <div>
        <v-layout id="landing-background" justify-center align-center>
            <v-flex lg4 class="landing-content" >
                <img src="../../assets/images/coloredsquares.jpg">
            </v-flex>
            <v-flex lg5 class="landing-content" >
                <h1>artze</h1>
                <h3>Fullstack Web Developer</h3>
            </v-flex>
        </v-layout>
        <div style="height: 100vh">
            <v-layout justify-center>
                <v-flex lg6>
                    <h2 style="text-align: center; margin-top: 3em; font-family: Raleway">
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
                                    <router-link to="/" tag="h3" class="project-card-title-text">Project 1</router-link>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                        <v-flex lg4>
                            <v-card class="project-card">
                                <v-card-title primary-title class="justify-center">
                                    <router-link to="/" tag="h3" class="project-card-title-text">Project 2</router-link>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700');

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
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
}

#landing-background {
    height: 100vh;
    background-image: url('../../assets/images/axiom-pattern.png');
    background-repeat: repeat;
    background-attachment: fixed;
}

.landing-content {
    /* border: 1px solid black; */
    text-align: right;
    padding: 0em 1.5em;
    animation: 2s ease-out 0s 1 fadeIntoView;
}

.landing-content img {
    height: 200px;
    width: 200px;
}

.landing-content h1 {
    font-family: Raleway;
    font-size: 5em;
    text-align: left;
    animation: 2s ease-out 0s 1 slideFromRight;
}

.landing-content h3 {
    font-family: Raleway;
    font-weight: 200;
    font-size: 2em;
    text-align: left;
    animation: 2s ease-out 0s 1 slideFromRight;
}

.project-card {
    margin: 0px 15px;
}

.project-card-title-text {
    font-family: Raleway;
    font-weight: 500;
}

.project-card-title-text:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>
