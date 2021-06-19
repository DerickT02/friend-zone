export default (state, action) => {
    switch(action.type){
        default:
            return state;
        case 'ADD_POST_TO_HOMEPAGE':
            return {
                ...state, posts: [action.payload, state.posts]
            }
        case 'REMOVE_POST_FROM_HOMEPAGE':
            return {
                ...state, watchList: state.posts.filter(post => post.id !== action.payload)
            }
    }
}
