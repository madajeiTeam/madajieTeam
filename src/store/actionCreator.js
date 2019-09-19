export default {
    changeModelState(){
        let action = {
            type: 'CHANGE_MODEL_STATE'
        }
        
        return action
    },
    changeLanguageState(params){
        let action = {
            type:'CHANGE_LANGUAGE_STATE',
            params:params
        }
        return action
    }
}