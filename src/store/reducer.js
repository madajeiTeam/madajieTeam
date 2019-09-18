import State from './state'
export default (preState=State,action)=>{
    let newData = JSON.parse(JSON.stringify(preState))
    let {type,params} = action
    switch (type) {
        case 'CHANGE_MODEL_STATE':
            console.log('老佛爷')
            newData.modelState = !newData.modelState
            break;
    
        default:
            break;
    }
    return newData
}