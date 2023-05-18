
const initialState = {
    data: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            console.log("asd");
            return {
                ...state,
                data: [action.value]

            };
        }
        default:
            return state
    }
}

export default reducer