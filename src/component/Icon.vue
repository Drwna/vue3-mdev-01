<script lang="ts" setup>
  import { computed, defineComponent } from 'vue';

  defineComponent({ name: 'Icon' });

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });
  const iconName = computed(() => `#icon-${props.name}`);

</script>

<template>
  <svg class="icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<style lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
