<template>
    <v-layout style="height: 100vh">
        <v-flex xs2 sm2 md2 lg2>
            <v-layout class="back-btn-section">
                <v-btn flat large class="link-btn large" to="/projects">Back<span class="blink">.</span></v-btn>
            </v-layout>
        </v-flex>
        <v-flex xs8 sm8 md8 lg8>
            <!-- Title description -->
            <h2 class="main-header-text mt-4">Operational Productivity Tools</h2>
            <h3 class="subheader-text">Background</h3>
            <p class="content-text">
                One of the primary issues of operational processes at my work was the lack of a centralized, systematic way of handling data. Most data was managed with the use of Excel sheets which involves manual data manipulation work, is error-prone and is inconvenient to share among team-members.
            </p>
            <p class="content-text">
                I have, on my own, built a suite of productivity tools from the ground up to address this problem. Up until now, the the tools cover the areas of Device Serial Number tracking, Return Merchandise Authorization (RMA) tracking, historical sales data and current sales performance monitoring.
            </p>
            <p class="content-text">
                The application consists of two parts: a Single Page Vuejs Application, and a backend Nodejs application supported by MySql as database.
            </p>

            <!-- Device Serial Number & RMA App -->
            <h2 class="header-text">Device Serial Number and RMA Tracking</h2>
            <h3 class="subheader-text">Background</h3>
            <p class="content-text">
                Our main products consists of various IoT hardware which contains software that are continually evolving. Effective troubleshooting will require tracing of containing software with a Device Serial Number.
            </p>
            <h3 class="subheader-text">The Problem</h3>
            <p class="content-text">
                Due to the nature of our manufacturing partner, the logs of Device Serial Numbers and its details are contained within separate Excel files which becomes a mess over time!
            </p>
            <v-layout justify-center>
                <img src="../../../assets/images/imei_mess.jpg">
            </v-layout>
            <p class="content-text">
                It is also possible that some of these software are upgraded post-manufacturing and these changes will need to be logged somewhere as well. To complete the tracing cycle and for the purposes of warranty, which device were shipped to which customer on which date will need to be recorded too. The hassle of dealing with these records on Excel sheets were simply overwhelming.
            </p>
            <p class="content-text">
                As with RMA, the issue was largely similar – they were recorded on a separate Excel sheet with no connection whatsoever with the serial number logs.
            </p>
            <h3 class="subheader-text">The Solution</h3>
            <p class="content-text">
                An upload interface was introduced to upload each manufacturing logs as it comes into a MySql database. To deal with software changes, recording shipment details and RMA, an interface was created to allow our staff to log these data with a barcode scanner. A search interface was of course created to query all details from the database with a serial number.
            </p>

            <!-- Sales App -->
            <h2 class="header-text">Sales Data and Performance</h2>
            <h3 class="subheader-text">The Problem</h3>
            <p class="content-text">
                Various analytics such as changing customer profiles over the years, product sales portfolio, customer profiles per product series, sales performance of each Sales Team etc. were only possible with manual Excel work to consolidate and extract data. We did not have a dynamic way to visualize analytics on the fly.
            </p>
            <h3 class="subheader-text">The Solution</h3>
            <p class="content-text">
                The obvious step forward was to dump all our sales data into a database. An interactive dashboard was created to visualize sales over the years, top customers/products as well as performance of each salesperson against their annual targets. Sales managers then have better visibility over the performance of respective teams. With increased transparency of business metrics, our technical team is able to give better priority to strategic clients during times of resource constraints.
            </p>
        </v-flex>
    </v-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=VT323');
@import url('https://fonts.googleapis.com/css?family=Raleway:600,800');

.main-header-text {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 2.5em;
}

.header-text {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 1.6em;
    margin-top: 2em;
}

.subheader-text {
    font-family: 'Raleway';
    font-weight: 800;
    font-size: 1.2em;
    margin-top: 1.5em;
}

.content-text {
    text-align: justify;
    font-family: 'Roboto';
    font-size: 1.2em;
    font-weight: 400;
    margin-top: 0.5em;
    color: #3a3a3a;
}

.back-btn-section {
    position: fixed;
}

.link-btn {
    font-family: 'VT323';
    font-size: 1.5em;
    font-weight: 400;
    text-transform: none;
}

.link-btn.large {
    height: 100px;
    font-size: 3em;
}

.link-btn:hover {
    color: #69ffdf;
}

.link-btn::before {
    color: transparent;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.blink {
    animation: blink 1s linear infinite;
}
</style>
