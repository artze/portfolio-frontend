<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex lg8>
                <h3>Chat App</h3>
                <v-text-field
                    label="Your Message"
                    v-model="currentMessage"
                    @keyup.enter="sendMessage"></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            ws: '',
            currentMessage: ''
        }
    },
    methods: {
        establishWebsocketConnection() {
            let host
            if(process.env.NODE_ENV === 'development') {
                host = 'ws://localhost:3000/api/websocket-app'
            } else if(process.env.NODE_ENV === 'production') {
                host = 'ws://artze.xyz/api/websocket-app'
            }
            this.ws = new WebSocket(host)
        },
        sendMessage() {
            this.ws.send(this.currentMessage)
            this.currentMessage = ''
        }
    },
    mounted() {
        this.establishWebsocketConnection()
    }
}
</script>
