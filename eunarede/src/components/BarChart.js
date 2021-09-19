import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  },
   /*watch: {
      barData () {
        console.log('bar data changed')
        this.renderChart(this.barData, this.chartOptions);
    },
      chartOptions () {
        this.renderChart(this.barData, this.chartOptions);
     }
    }*/
}