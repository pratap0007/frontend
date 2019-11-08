import { ActionGroup } from "@patternfly/react-core"
import {home} from '../actions/ActionType'

// const appdata = { };
const initialState = {
    Name:" ",
    Descriptions : " "
}
export const reducer =( state = initialState, action: any) =>{
    switch(action.type){
        case home: return {
            ...state,
            data : action.payload
        }
        default: return state
    }
}

  
export default reducer