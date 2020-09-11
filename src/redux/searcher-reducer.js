const MAKE_SEARCH = 'MAKE-SEARCH'
const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT'


let initialState = {
    searcherResults:[
        {search: 'Sasha'},
        {search: 'Sash'},
    ],
    newSearchText: 'Search!'
}

const SearcherReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT:{
            return {
                ...state,
                newSearchText: action.newSearchText
            }
        }
        case MAKE_SEARCH:{
            return {
                ...state,
                searcherResults: [...state.searcherResults, {search: state.newSearchText}],
                newSearchText: ''
            }
        }
        default: return state
    }
}

export let updateSearchActionCreator = (text) => ({type: UPDATE_SEARCH_TEXT, newSearchText: text})

export let makeSearchActionCreator = () => ({type: MAKE_SEARCH})


export default SearcherReducer
