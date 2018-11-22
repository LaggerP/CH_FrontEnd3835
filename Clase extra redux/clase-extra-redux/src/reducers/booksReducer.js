export default function (state = [], action){
    switch(action.type){
        case 'FETCH_BOOKS':
            console.log('FETCH_BOOKS');
            break;
        default:
            break
    }
    return state;
}