<template>
    <v-layout justify-center>
        <v-flex xs8 sm8 md8 lg6>
            <!-- Title description -->
            <h2 class="main-header-text mt-4">Operational Productivity Tools</h2>
            <video autoplay loop>
                <source src="../../../assets/videos/productivity-tool.mp4" type="video/mp4">
            </video>
            <h3 class="header-text">Background</h3>
            <p class="content-text">
                One of the primary issues with operations at my work was the lack of a centralized, systematic way of handling data. Most data was managed with the use of Excel sheets involving manual data manipulation work that is error-prone and inconvenient to share among team-members.
            </p>
            <p class="content-text">
                To address the problems, I built a suite of productivity tools from the ground up to streamline our processes in Device Serial Number tracking, Return Merchandise Authorization (RMA) tracking, historical sales data recording and current sales performance monitoring.
            </p>
            <p class="content-text">
                The application consists of two parts: a Single Page Vuejs Application, and a backend Nodejs API application supported by MySql as database.
            </p>

            <!-- Device Serial Number & RMA App -->
            <h2 class="header-text">Device Serial Number and RMA Tracking</h2>
            <h3 class="subheader-text">Background</h3>
            <p class="content-text">
                Our main products consists of various IoT hardware which contains software that evovles on an ongoing basis. Troubleshooting normally requires tracking of software versions on each device. This task is usually accomplished by retrieving software version data with a given Device Serial Number.
            </p>
            <h3 class="subheader-text">The Problem</h3>
            <p class="content-text">
                Due to the nature of our manufacturing partner, the manufacturing records containing Device Serial Numbers, software versions and other details are provided to us in separate Excel files. As you can imagine, the repository of such records becomes a mess over time!
            </p>
            <v-layout justify-center>
                <img src="../../../assets/images/imei_mess.jpg">
            </v-layout>
            <p class="content-text">
                It is also possible that some of these software are upgraded post-manufacturing and these changes will need to be logged somewhere as well. To complete the recording process, which device shipped to which customer on which date will need to be logged as well, to enable cross-checking when a customer comes to us with an issue, and to check against warranty terms. This added layer of complexity makes it all the more overwhelming to handle them in Excel.
            </p>
            <p class="content-text">
                As with RMA, the issue was largely similar – we needed to log repairs and replacement of devices. These records were, again, done in Excel sheets with no connection whatsoever with the Device Serial Number logs.
            </p>
            <h3 class="subheader-text">The Solution</h3>
            <p class="content-text">
                An upload interface was introduced to upload each manufacturing logs as it comes into a MySql database. To deal with software changes, recording shipment details and RMA, an interface was created to allow our staff to log these data with a barcode scanner. A search interface was of course created to query all details - with a serial number, the user could now retrieve manufacturing info, changes in software versions, shipment info and RMA info.
            </p>

            <!-- Sales App -->
            <h2 class="header-text">Sales Data and Performance</h2>
            <h3 class="subheader-text">The Problem</h3>
            <p class="content-text">
                Similarly, our sales data is also recorded in Excel sheets. Various analytics such as changing customer profiles over the years, product sales portfolio, customer profiles per product series, sales performance of each Sales Team etc. were only possible with manual Excel work to consolidate and extract data. We simply did not have a dynamic way to visualize analytics on the fly.
            </p>
            <h3 class="subheader-text">The Solution</h3>
            <p class="content-text">
                The obvious step forward was to dump all our sales data into a database. An interactive dashboard was created to visualize sales over the years, top customers/products as well as performance of each salesperson against their annual targets. With increased transparency of business metrics, each functional department will be able to more easily make relevant decisions, e.g. our technical team is able to give higher priority to strategic clients during times of resource constraints.
            </p>
        </v-flex>
    </v-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:600,800');

video {
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 900px;
    height: 451px;
}

img {
    height: 480px;
    margin: 2.5em 0;
    width: 688px;
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
