<template>
    <v-layout justify-center>
        <v-flex xs8 sm8 md8 lg6>
            <!-- Title description -->
            <h2 class="main-header-text mt-4">Microservices for a Device Management Platform</h2>
            <h3 class="subheader-text">Background</h3>
            <p class="content-text">
                We wanted to implement a feature that allows a notification (email, sms etc.) to be sent instantly when a parameter measured by a Router/Tracker fulfills a user-defined condition. A Rules Engine microservice was introduced to check incoming data (from Router/Tracker) against user-defined conditions and triggers a notification service if necessary.
            </p>
            <img class="system-diagram" src="../../../assets/images/d2s_ms_diagram.svg">
            <p class="content-text">
                The diagram above is a general overview of how our system is designed:
                <ol>
                    <li>A Router/Tracker sends data to the Device Server at a fixed interval</li>
                    <li>The Device Server records these data into a database and passes the same data to the Messaging Bus.</li>
                    <li>The Rules Engine picks up the message, then retrieves Device Management related data (e.g. user-defined conditions) from the Device Management Platform and checks if the incoming parameters fulfills these conditions.</li>
                    <li>If the conditions are met, a notification message is sent to the Messaging Bus, and will be picked up by the Device Management Platform which will then send notifications to the user.</li>
                </ol>
            </p>

            <h3 class="subheader-text">The Approach</h3>
            <p class="content-text">
                We chose OpenNats Streaming as our message broker because of its high throughput and simplicity. To get this up and running we set up a cluster of message broker servers with Docker and a monitoring tool to examine message traffic.
            </p>
            <p class="content-text">
                Within the Rules Engine, we decided to go with Vert.x to take advantage of its event-driven architecture and the ease of managing concurrent threads. Vert.x Verticles were deployed within the Rules Engine, and event-driven communication between the Verticles was set up.
            </p>
            <p class="content-text">
                The existing applications – Device Server and Device Management Platform were subsequently modified to interface with the Messaging Bus. With these features in place, we gave the system a stress test, and explored various options of scaling.
            </p>
        </v-flex>
    </v-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:600,800');

img.system-diagram {
    display: block;
    margin: 5em auto;
    width: 830px;
    height: 462px;
}

.main-header-text {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 2.5em;
}

.header-text {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 1.8em;
    margin-top: 2em;
}

.subheader-text {
    font-family: 'Raleway';
    font-size: 1.4em;
    font-weight: 500;
    margin-top: 1.5em;
}

.content-text {
    font-size: 1.4em;
    font-weight: 300;
    margin-top: 0.5em;
    color: #3a3a3a;
}

@media only screen and (max-width : 600px) {
    video {
        display: none;
    }

    img {
        display: none;
    }

    .main-header-text {
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 2em;
    }

    .header-text {
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 1.4em;
        margin-top: 2em;
    }

    .subheader-text {
        font-family: 'Raleway';
        font-size: 1.2em;
        font-weight: 500;
        margin-top: 1.5em;
    }

    .content-text {
        font-size: 1.2em;
        font-weight: 300;
        margin-top: 0.5em;
        color: #3a3a3a;
    }
}

@media only screen and (min-width : 600px) and (max-width : 960px) {
    video {
        width: 500px;
        height: 250px;
    }

    img {
        width: 500px;
        height: 348px;
    }
}
</style>
