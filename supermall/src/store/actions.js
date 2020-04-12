import {
  ADD_TO_CART,
  INCREMENT_COUNT
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldInfo) {
        context.commit(INCREMENT_COUNT, oldInfo)
        resolve('该商品已经存在，数量+1')
      } else  {
        payload.count = 1
        payload.checked = true
        context.commit(ADD_TO_CART, payload)
        resolve('将新商品添加到购物车')
      }
    })
  }
}