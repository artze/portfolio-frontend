<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex lg8>
                <h3>Chat App</h3>
                <v-text-field
                    label="Your Message"
                    v-model="currentMessage"
                    @keyup.enter="sendMessage"></v-text-field>
                <p v-for="message in receivedMessages" :key="message">{{message}}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            ws: '',
            currentMessage: '',
            receivedMessages: []
        }
    },
    methods: {
        establishWebsocketConnection() {
            let host
            if(process.env.NODE_ENV === 'development') {
                host = 'ws://localhost:3000/api/chat-app'
            } else if(process.env.NODE_ENV === 'production') {
                host = 'ws://artze.xyz/api/chat-app'
            }
            this.ws = new WebSocket(host)
            this.ws.addEventListener('message', (msg) => {
                this.receivedMessages.push(msg.data)
            })
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
