import type { ECBasicOption } from 'echarts/types/dist/shared';

const GaugeChartOption: ECBasicOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}',
      },
      data: [
        {
          value: 50,
          name: 'SCORE',
        },
      ],
    },
  ],
};

export default GaugeChartOption;
