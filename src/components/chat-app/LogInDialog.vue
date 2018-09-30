<template>
    <v-dialog
        width="500"
        persistent
        v-model="dialog">
        <v-card>
            <v-toolbar
                dark
                color="red darken-3"
                class="elevation-0">
                <v-toolbar-title class="title-text">Log in</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-layout>
                    <v-text-field
                        label="Username"
                        color="red darken-3"
                        v-model="username"
                        @keyup.enter="logIn"
                        :error-messages="usernameFieldErrorMessages"></v-text-field>
                </v-layout>
                <v-layout justify-end>
                    <v-btn
                        dark
                        color="red darken-3"
                        @click="logIn">Log in</v-btn>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
            username: '',
            usernameFieldErrorMessages: []
        }
    },
    methods: {
        logIn() {
            if(!this.username) {
                this.usernameFieldErrorMessages = 'Please enter a username'
            } else {
                this.dialog = false
                this.$emit('loggedIn', this.username)
            }
        }
    }
}
</script>

<style scoped>
.title-text {
    font-size: 1.35em;
    font-weight: 100;
}
</style>
