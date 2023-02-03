<script lang="ts" setup>
  import { defineComponent, onMounted, ref } from 'vue';
  import type { ECBasicOption } from 'echarts/types/dist/shared';
  import * as echarts from 'echarts/core';
  import 'echarts-gl';
  import { LineChart, BarChart, PieChart, ScatterChart, GaugeChart, RadarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';

  import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
  } from 'echarts/components';

  echarts.use([
    LineChart,
    BarChart,
    PieChart,
    ScatterChart,
    GaugeChart,
    RadarChart,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
    CanvasRenderer,
  ]);

  defineComponent({ name: 'Charts' });

  type Props = {
    name: string;
    option: ECBasicOption;
    width?: number;
    height?: number;
  };
  const props = defineProps<Props>();
  const myChart = ref<echarts.ECharts>();
  const div = ref<HTMLDivElement>();
  onMounted(() => {
    if (!div.value) return;
    myChart.value = echarts.init(div.value);
    myChart.value.setOption({
      ...props.option,
      title: {
        text: props.name,
        left: 'center',
      },
    });
  });
  const height = props.height ? props.height + 'px' : '300px';
  const width = props.width ? props.width + 'px' : '100%';
</script>

<template>
  <div ref="div" class="chart"></div>
</template>

<style lang="scss" scoped>
  .chart {
    min-height: v-bind(height);
    width: v-bind(width);
  }
</style>
