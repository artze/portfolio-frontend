<template>
    <div id="map"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
    props: ['selectedJourneyCoordArr'],
    data() {
        return {
            map: ''
        }
    },
    methods: {
        addMapTiles() {
            this.map.setView([55.668335, 12.569443], 15)
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiYXJ0emUiLCJhIjoiY2psNWdxZ3g1MHA5dDN4cGJ4Ym93Mnl6YyJ9.OJ2PstZSXAnFJa5UMqwS5w'
            }).addTo(this.map)
        },
        clearMapMarkings() {
            this.map.eachLayer((layer) => {
                if(!(layer instanceof L.TileLayer)) {
                    this.map.removeLayer(layer)
                }
            })
        },
        addCirclesAndPolyline() {
            this.clearMapMarkings()
            L.polyline(this.selectedJourneyCoordArr, {color: 'blue'})
                .setStyle({weight: 6})
                .addTo(this.map)
            this.selectedJourneyCoordArr.forEach((coord) => {
                L.circle(coord, {
                    radius: 4,
                    weight: 1,
                    color: '#000000',
                    fillColor: '#EEEEEE',
                    fillOpacity: 1
                })
                    .addTo(this.map)
            })
        }
    },
    mounted() {
        this.map = L.map('map')
        this.addMapTiles()
    },
    watch: {
        selectedJourneyCoordArr() {
            this.addCirclesAndPolyline()
        }
    }
}
</script>

<style scoped>
#map {
    height: calc(100vh - 48px);
    width: auto;
}
</style>
