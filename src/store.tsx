import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer'
import axios from 'axios'
import thunk from 'redux-thunk'
import takeAction from './actions/action'
import { any } from 'prop-types';
export interface ResData {
    Name: string,
    Description: string,
    Rating: number,
    Downloads: number,
    YAML: string
}
const fetchdata = () => {
    return function (dispatch: any) {
        axios.get('http://localhost:5000/tasks')
            .then((response: any) => {
                let users = response.data.map((task: ResData) => //.task.Name)
                {
                    let r: ResData = {
                        Name: task.Name,
                        Description: task.Description,
                        Rating: task.Rating,
                        Downloads: task.Downloads,
                        YAML: task.YAML
                    }
                    return r;

                })
                dispatch(takeAction(users))
            })

    }
}
export const store = createStore(reducer, applyMiddleware(thunk));
//console.log(store.getState())
// store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchdata())
