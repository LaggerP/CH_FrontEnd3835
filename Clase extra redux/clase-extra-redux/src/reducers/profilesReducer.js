

export default function (state = {}, action) {
    switch (action.type) {
        case 'UPDATE_PROFILE':
            state = {
                ...state,
                profile: {
                    name: "Pablo2",
                    lastName: 'Lagger2'
                },
            }
            console.log(state.profile);
            break;

        default:
            break
    }
    return state;
}
