export default (state='', action) => {
    if (action.type === 'ADD_DAY_EVENT') {
        return action.payload;
    }
    return state;
};
