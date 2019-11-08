import { home } from './ActionType'
const takeAction = (data: any) => {
    return {
        type: 'home',
        payload: data
    }
}
export default takeAction 