<template>
    <v-layout justify-center align-end fill-height class="contact-section">
        <v-flex xs10 sm10 md10 lg10>
            <p class="contact-text">
                My <a href="https://journal.artze.xyz" target="_blank">Code Journal</a><br>
                You can find my work on <a href="https://github.com/artze" target="_blank">Github</a><br>
                Contact me on <a href="https://www.linkedin.com/in/arthur-wong/" target="_blank">Linkedin</a>
            </p>
        </v-flex>
    </v-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,800');

.contact-section {
    height: 300px;
    margin-top: 200px;
    background-color: #e4e2e2;
}

.contact-text {
    font-family: 'Raleway';
    font-weight: 800;
    font-size: 3em;
    line-height: 1.2em;
    padding-bottom: 0.5em;
}

.contact-text a {
    color: #c52318;
}

@media only screen and (max-width : 600px) {
    .contact-section {
        height: 200px;
        margin-top: 150px;
    }

    .contact-text {
        font-size: 1.5em;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    .contact-section {
        height: 300px;
        margin-top: 200px;
    }

    .contact-text {
        font-size: 2.5em;
    }
}
</style>
