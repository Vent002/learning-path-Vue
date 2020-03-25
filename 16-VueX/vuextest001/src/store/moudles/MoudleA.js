export default  {
  state:{
    name:'赵四'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullName(state){
      return '拉布拉斯.'+state.name
    },
    fullName2(state,getters){
      return '尼古拉斯.'+getters.fullName
    },
    fullName3(state,getters,rootState){
      return getters.fullName2 +'.'+ rootState.counter
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','王五')
      },1000)
    }
  }
}
