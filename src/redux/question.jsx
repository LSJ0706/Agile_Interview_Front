export default function interviewReducer(state = '', action) {
    switch (action.type) {
        case 'QUESTION': {
            return action.payload
        }
        default:
            return state
    }
}