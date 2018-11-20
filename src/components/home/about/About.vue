<template>
    <v-layout justify-center align-center fill-height class="about-section">
        <v-flex xs8 sm8 md8 lg8>
            <p class="about-text">
                I began my career managing finance &amp; operations, and transitioned into software development to address various operational inefficiencies. I am now a full-time developer building and maintaining an IoT platform, with a diverse skill-set and cross-functional work experience.
            </p>
        </v-flex>
    </v-layout>
</template>

<style scoped>
.about-section {
    height: 100vh;
}

.about-text {
    font-family: 'Roboto';
    font-size: 2.5em;
    font-weight: 300;
}

@media only screen and (max-width : 600px) {
    .about-text {
        font-size: 1.5em;
        font-weight: 300;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .about-text {
        font-size: 1.5em;
        font-weight: 300;
    }
}
</style>
