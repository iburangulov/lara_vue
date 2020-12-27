<template>
    <div class="spinner-border text-dark spin" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
export default {
    name: "spin"
}
</script>

<style scoped>
.spin {
    position: fixed;
    top: 50%;
    left: 50%;
}
</style>
