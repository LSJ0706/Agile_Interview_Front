export default function interviewReducer(state = '', action) {
    switch (action.type) {
        case 'JOB': {
            return action.payload
        }
        default:
            return state
    }
}