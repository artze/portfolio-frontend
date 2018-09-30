<template>
    <div>
        <app-header></app-header>
        <log-in-dialog
            @loggedIn="establishWebsocketConnection($event)"></log-in-dialog>
        <v-layout justify-center>
            <v-flex lg6>
                <v-layout column class="message-box">
                    <v-card
                        class="mt-1"
                        :class="checkOwnMessage(message)"
                        v-for="message in messagesArr"
                        :key="message.timeStamp">
                        <v-card-text>
                            <span class="caption font-weight-bold" v-if="!message.self">{{ message.username }}</span><br v-if="!message.self">
                            {{ message.messageText }}
                        </v-card-text>
                    </v-card>
                </v-layout>
                <v-text-field
                    label="Your Message"
                    color="red darken-3"
                    v-model="currentMessage"
                    @keyup.enter="sendMessage"
                    append-icon="send"
                    :append-icon-cb="sendMessage"></v-text-field>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Header from './Header'
import LogInDialog from './LogInDialog'

export default {
    components: {
        'app-header': Header,
        'log-in-dialog': LogInDialog
    },
    data() {
        return {
            ws: '',
            currentMessage: '',
            messagesArr: [],
            username: ''
        }
    },
    methods: {
        establishWebsocketConnection(event) {
            let host
            this.username = event
            if(process.env.NODE_ENV === 'development') {
                host = 'ws://localhost:3000/api/chat-app'
            } else if(process.env.NODE_ENV === 'production') {
                host = 'ws://artze.xyz/api/chat-app'
            }
            this.ws = new WebSocket(host)
            this.ws.addEventListener('message', (msg) => {
                let messagePayload = {
                    messageText: JSON.parse(msg.data).messageText,
                    username: JSON.parse(msg.data).username,
                    timeStamp: msg.timeStamp
                }
                this.messagesArr.push(messagePayload)
            })
        },
        sendMessage() {
            this.ws.send(JSON.stringify({
                username: this.username,
                messageText: this.currentMessage
            }))
            this.messagesArr.push({
                self: true,
                messageText: this.currentMessage,
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
