import Data from '../Shared/data.json'
import Suggestion from '../Shared/suggestions.json'

export const initialState = {
    data: Data,
    suggestion: Suggestion,
    
}

export const Reducer = (state = initialState, action) => {
    return state
}