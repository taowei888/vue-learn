<script setup lang="ts">
</script>

<template>
    <div class="tw-div">
        aaaaa
        <div class="tw-div__box">
            bbbb
            <div class="tw-div__box--in">
                cccc
            </div>
        </div>
    </div>

</template>

<style lang='scss'>
@include b(div) {
    background-color: blue;
    color: white;

    @include e(box) {
        background-color: red;
        color: white;

        @include m(in) {
            background-color: yellow;
            color: white;
        }
    }
}
</style>
