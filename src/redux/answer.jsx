export default function interviewReducer(state = '', action) {
    switch (action.type) {
        case 'ANSWER': {
            return action.payload
        }
        default:
            return state
    }
}