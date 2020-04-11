import BackTop from '../components/content/backTop/BackTop.vue'

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },

    listeShowBackTop(positioY) {
      this.showBackTop = positioY > 1000
    }
  }
}