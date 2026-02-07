 export const initialState = [154, 42, 1, 87, 695, 36, 2, 10, 39, 9];
function Sort(state) {
    const sorted = [...state].sort((a, b) => a - b);
    return sorted.slice(0, sorted.length - 3);

    
}
function MinNumber (state) {
        const min = Math.min(...state);
        return state.filter((item) => item !== min);
    }
function reducer(state, action) {
        switch (action.type) {
            case 'plus':
                return [];
                case "add":
                    return [...state, action.payload || 3];
            case 'sort':
                return Sort(state);
                case 'min':
                return MinNumber(state);
                case "square":
                    return state.map( item => Math.pow(item,2))
            default:
                return state;
        }
    }
export default reducer