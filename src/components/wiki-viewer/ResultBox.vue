<template>
<a :href="'https://en.wikipedia.org/?curid=' + result.pageid">
    <div class="result-card">
        <h4>{{result.title}}</h4>
        <p>{{result.extract}}</p>
    </div>
</a>
</template>

<script>
export default {
    props: ['result']
}
</script>

<style scoped>
.result-card {
    border: 1px solid #bbbbbb;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 1em;
}

.result-card:hover {
    border: 1px solid #aaacff;
}

a {
    text-decoration: none !important;
    color: #000;
}

a:hover {
    text-decoration: none !important;
    color: #000;
}
</style>
