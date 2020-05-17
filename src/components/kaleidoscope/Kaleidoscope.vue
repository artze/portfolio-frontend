<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>

            <div id="canvas"></div>
        </v-layout>
    </v-container>
</template>

<script>
import P5 from 'p5'

export default {
    methods: {
        initializeP5() {
            const symmetry = 6
            const angle = 360 / symmetry
            const init = (p) => {
                p.setup = () => {
                    p.createCanvas(800, 800)
                    p.angleMode(p.DEGREES)
                    p.background('#670000')
                    p.strokeWeight(5)
                    p.stroke('white')
                }

                p.draw = () => {
                    p.translate(p.width / 2, p.height / 2)

                    if(p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
                        let mx = p.mouseX - p.width / 2
                        let my = p.mouseY - p.height / 2
                        let pmx = p.pmouseX - p.width / 2
                        let pmy = p.pmouseY - p.height / 2

                        if(p.mouseIsPressed) {
                            for(let i = 0; i < symmetry; i++) {
                                p.rotate(angle)
                                p.line(mx, my, pmx, pmy)
                                p.push()
                                p.scale(1, -1)
                                p.line(mx, my, pmx, pmy)
                                p.pop()
                            }
                        }
                    }
                }
            }
            return new P5(init, 'canvas')
        }
    },
    mounted() {
        this.initializeP5()
    }
}
</script>
