<template>
    <div>
        <app-header></app-header>
        <v-layout justify-center>
            <v-flex lg6>
                <v-layout column class="message-box">
                    <v-card
                        class="mt-1"
                        :class="checkOwnMessage(message)"
                        v-for="message in messagesArr"
                        :key="message.timeStamp">
                        <v-card-text>
                            {{ message.data }}
                        </v-card-text>
                    </v-card>
                </v-layout>
                <v-text-field
                    label="Your Message"
                    color="red darken-3"
                    v-model="currentMessage"
                    @keyup.enter="sendMessage"></v-text-field>
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
            messagesArr: []
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
                this.messagesArr.push(msg)
            })
        },
        sendMessage() {
            this.ws.send(this.currentMessage)
            this.messagesArr.push({
                self: true,
                data: this.currentMessage,
                timeStamp: new Date().getTime()
            })
            this.currentMessage = ''
        },
        checkOwnMessage(message) {
            return {
                'received-msg-card': !message.self,
                'sent-msg-card': message.self
            }
        }
    },
    mounted() {
        this.establishWebsocketConnection()
    }
}
</script>

<style scoped>
.message-box {
    height: calc(100vh - 124px);
    overflow: auto;
}

.received-msg-card {
    max-width: 500px;
    width: fit-content;
    background-color: #f0f4c3;
}

.sent-msg-card {
    max-width: 500px;
    width: fit-content;
    background-color: #e3f2fd;
    margin-left: auto;
}
</style>
