<template>
    <v-layout justify-center align-center fill-height class="about-section">
        <v-flex xs8 sm8 md8 lg8>
            <p class="about-text">
                I am driven by the desire to design and build things. I have built web applications for various purposes, be it to streamline operational processes, to serve the needs of clients, or for myself. At the core, I'm a developer but I enjoy being involved in multiple areas of product development and see the results of my work in action. I am easily inspired to learn new things and to challenge myself, and always on the lookout for interesting projects.
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
    font-weight: 200;
}

@media only screen and (max-width : 600px) {
    .about-text {
        font-size: 1.5em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .about-text {
        font-size: 1.5em;
    }
}
</style>
