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
        <v-layout style="height: 100vh" justify-center>
            <v-flex lg6>
                <h2 style="text-align: center; margin-top: 5em; font-family: Raleway">
                    Projects section
                </h2>
                <router-link to="/quote-machine">Quote Machine</router-link>
            </v-flex>
        </v-layout>
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
</style>
