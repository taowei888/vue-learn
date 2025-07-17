<script setup lang="ts">

// defineProps 是一个仅 <script setup> 中可用的编译宏命令，并不需要显式地导入。
// 声明的 props 会自动暴露给模板。defineProps 会返回一个对象，其中包含了可以传递给组件的所有 props
// const props = defineProps(['count'])
// console.log(props.count)


// ts
// 注意这里的类型是props的类型
// const props = defineProps({
//   count: { type: Number, required: true },
//   name: String
// })
// console.log(props)


// 泛型
// 注意这里的类型是ts的类型
// const props = defineProps<{
//   count: number
//   name?: string
// }>()
// console.log(props)


// 一般用法，失去默认值
// interface Props  {
//   count: number,
//   name?: string
// }
// const props = defineProps<Props>()
// console.log(props)

// withDefaults 编译器宏
interface Props  {
  count: number,
  name?: string
}
const props = withDefaults(defineProps<Props>(), {
  count: 888,
  name: 'lalala'
})
console.log(props)





</script>

<template>
  <div>
    count: {{ count }}
  </div>
  <div>
    name: {{ name }}
  </div>
</template>

<style scoped></style>
