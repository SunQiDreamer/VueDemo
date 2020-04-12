import {
  ADD_TO_CART,
  INCREMENT_COUNT
} from './mutation-types'

export default {
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  [INCREMENT_COUNT](state, payload) {
      payload.count += 1
  }
}