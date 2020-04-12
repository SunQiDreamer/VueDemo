import Toast from './Toast'

const plugin = {}

plugin.install = function (Vue) {
  const ToastConstructor = Vue.extend(Toast)

  const toast = new ToastConstructor()

  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = function(message, duration=3000) {
    toast.message = message
    toast.isShow = true

    setTimeout(() => {
      toast.isShow = false
    }, duration);
  }
}

export default plugin