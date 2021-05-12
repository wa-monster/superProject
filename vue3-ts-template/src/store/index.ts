
import { createStore} from 'vuex'
import getters from './getter'
import user from './module/user'
const store = createStore({
  modules:{
    user
  },
  getters
})
export default store