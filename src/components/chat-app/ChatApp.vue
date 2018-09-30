<template>
    <div>
        <app-header></app-header>
        <v-layout justify-center>
            <v-flex lg8>
                <v-text-field
                    label="Your Message"
                    v-model="currentMessage"
                    @keyup.enter="sendMessage"></v-text-field>
                <p v-for="message in receivedMessages" :key="message.timeStamp">{{message.data}}</p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Header from './Header'

export default {
    components: {
        'app-header': Header
    },
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
                this.receivedMessages.push(msg)
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
