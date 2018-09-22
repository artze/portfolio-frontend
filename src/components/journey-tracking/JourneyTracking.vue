<template>
    <div>
        <app-header></app-header>
        <v-layout>
            <v-flex lg6>
                <stepper-section></stepper-section>
            </v-flex>
            <v-flex lg6 id="map">
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Header from './Header'
import StepperSection from './StepperSection'

export default {
    components: {
        'app-header': Header,
        'stepper-section': StepperSection
    },
    data() {
        return {
            map: ''
        }
    },
    methods: {
        addMapTiles() {
            this.map.setView([51.505, -0.09], 15)
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiYXJ0emUiLCJhIjoiY2psNWdxZ3g1MHA5dDN4cGJ4Ym93Mnl6YyJ9.OJ2PstZSXAnFJa5UMqwS5w'
            }).addTo(this.map)
        }
    },
    mounted() {
        this.map = L.map('map')
        this.addMapTiles()
    }
}
</script>

<style scoped>
#map {
    height: calc(100vh - 48px);
    width: auto;
}
</style>
