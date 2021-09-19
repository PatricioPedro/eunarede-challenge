<template>
 <q-page padding class="q-pa-lg bg-grey-2 constrain">
    <div class="container fit">
      <div class="row no-wrap q-my-md q-gutter-sm justify-center">
        <div class="col-6">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Linhas</div>
      </q-card-section>
      <line-chart
        v-if="ChartConfig.labels.length"
        :chart-data="ChartConfig"
        :chart-options="options"
      />
    </q-card>
        </div>
        <div class="col-6">
         <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Barras</div>
      </q-card-section>
      <bar-chart
        v-if="ChartConfig.labels.length"
        :chart-data="ChartConfig"
        :chart-options="options"
      />
    </q-card>
        </div>
      </div>
       <div class="row no-wrap q-my-md q-gutter-sm justify-center">
        <div class="col-6">
          <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Pizza</div>
      </q-card-section>
      <pie-chart
        v-if="ChartConfig.labels.length"
        :chart-data="ChartConfig"
        :chart-options="options"
      />
    </q-card>
        </div>
        <div class="col-6">
         <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Velocimetro</div>
      </q-card-section>
      <doubght-chart
        v-if="ChartConfig.labels.length"
        :chart-data="ChartConfig"
        :chart-options="options"
      />
    </q-card>
        </div>
      </div>
       <div class="row no-wrap q-gutter-sm justify-center">
        <div class="col-6">
          <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Radar</div>
      </q-card-section>
        <radar-chart
        v-if="ChartConfig.labels.length"
        :chart-data="ChartConfig"
        :chart-options="options"
      />
    </q-card>
        </div>
        <div class="col-6">
         <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Tabela</div>
      </q-card-section>
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Equipa)</th>
            <th class="text-right">N° de golos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in chartData" :key="index">
            <td class="text-left">{{ data.name }}</td>
            <td class="text-left ">{{ data.team }}</td>
            <td class="text-right ">{{ data.gols }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
        </div>
      </div>
      </div>
  </q-page>
</template>

<script>

import LineChart from "../components/LineChart.js";
import PieChart from "../components/PieChart.js";
import RadarChart from "../components/RadarChart.js";
import DoubghtChart from "../components/DoubghtChart.js";
import BarChart from "../components/BarChart.js";
import { mapActions, mapState } from 'vuex'
import  { ConfigChart }  from "../config/chartConfig"

const ChartConfig = ConfigChart.ChartConfig

export default {
  components: {
    LineChart,
    BarChart,
    PieChart,
    RadarChart,
    DoubghtChart
  },
  computed: {
    ...mapState('chartdata', ['chartData'])
  },
  data() {
    return {
      ChartConfig: ChartConfig,
      options: ChartConfig.options
    };
  },
  methods: {
    ...mapActions('chartdata', ['setDataChart']),
    getChartData: function (chartDataFromAPI) {
      /**
       * 
       * Adiciona os dados da API para o chart
       */
      chartDataFromAPI.forEach(data => {
        this.ChartConfig.labels.push(data.name)
        this.ChartConfig.datasets[0].data.push(data.gols)
      });
    }
  },
  async mounted() {
    await this.setDataChart();
    this.getChartData(this.chartData);
  },
};
</script>

<style>
</style>