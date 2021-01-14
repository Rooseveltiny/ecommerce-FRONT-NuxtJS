<template>
  
    <div class="main">
        <template v-if="images.length">
            <div class="image" :style="{'background-image': `url(${images[0].cloud_link})`}"></div>
        </template>
        <template v-else>
            Нет изображения
        </template>
    </div>

</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>

.main{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image{
    width: 100%;
    height: 100%;
    display: flex;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
}

</style>