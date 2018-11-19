<template>
    <v-layout column>
        <v-flex xs12 sm12 md12 lg12>
            <v-layout column justify-center style="height: 100%;">
                <v-flex xs1 sm1 md1 lg1>
                    <work-project-cards></work-project-cards>
                    <hobby-project-cards></hobby-project-cards>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import WorkProjectCards from './WorkProjectCards'
import HobbyProjectCards from './HobbyProjectCards'

export default {
    components: {
        'work-project-cards': WorkProjectCards,
        'hobby-project-cards': HobbyProjectCards
    }
}
</script>
