<template>
    <v-layout column>
        <v-flex xs12 sm12 md12 lg12>
            <v-layout column justify-center style="height: 100%;">
                <v-flex xs1 sm1 md1 lg1>
                    <project-list></project-list>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import ProjectList from './ProjectList'

export default {
    components: {
        'project-list': ProjectList
    }
}
</script>
