export default {
  // 定义方法
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  incrementCount(state,payload){
    state.counter += payload.count
  },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updateInfo(state){
    state.info.name = 'hsh'
  }
}
