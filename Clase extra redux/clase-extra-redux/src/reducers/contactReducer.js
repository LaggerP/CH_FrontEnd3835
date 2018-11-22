import data from '../data/users'

export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            console.log(state);
            return state.concat(data);
            break;

        default:
            break
    }
    return state;
}
