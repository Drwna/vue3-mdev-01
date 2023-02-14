<script lang="ts" setup>
  import { defineComponent, inject } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';
  import Charts from '@/views/echarts/Charts.vue';
  import LineChartOption from '@/views/echarts/LineChartOption';
  import BarChartOption from '@/views/echarts/BarChartOption';
  import PieChartOption from '@/views/echarts/PieChartOption';
  import ScatterChartOption from '@/views/echarts/ScatterChartOption';
  import RadarChartOption from '@/views/echarts/RadarChartOption';
  import GaugeChartOption from '@/views/echarts/GaugeChartOption';

  defineComponent({ name: 'EchartsPage' });

  const hasBack = inject('hasBack', true);
  const hasTitle = inject('hasTitle', true);
</script>

<template>
  <div class="wrapper">
    <TitleBar v-if="hasTitle" title="图表示例" :hasBack="hasBack" />
    <div class="content">
      <Charts name="柱状图" :option="BarChartOption" />
      <Charts name="折线图" :option="LineChartOption" />
      <Charts name="饼图" :option="PieChartOption" />
      <Charts name="散点图" :option="ScatterChartOption" />
      <Charts name="雷达图" :option="RadarChartOption" />
      <Charts name="仪表盘" :option="GaugeChartOption" />
      <!--      <Charts name="3D 柱状图" :option="Bar3DChartOption" :height="400" />-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .content {
      padding-top: 20px;
      flex: 1;
      overflow: auto;
    }
  }
</style>
