<template>
    <div>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="1">校园之声</mt-tab-item>
            <mt-tab-item id="2">往期节目</mt-tab-item>
            <mt-tab-item id="3">同学规划</mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
    export default {
        props:{
            select:String,
        },
        data() {
            return {
                selected:this.select ? this.select : "1"
            }
        }
    }
</script>

<style scoped>
a {
    color: #000000;
}
</style>
