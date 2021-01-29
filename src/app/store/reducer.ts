import { ProjectActionTypes } from './action';

export let initialState = {
    previousState: {
        nodes: [],
        links: [],
        drawings: [],
        symbols: []
    },
    nodes: [],
    links: [],
    drawings: [],
    symbols: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ProjectActionTypes.UPDATE_NODES:
            return {
                previousState: state,
                nodes: action.payload,
                links: state.links,
                drawings: state.drawings,
                symbols: state.symbols
            }
        case ProjectActionTypes.UPDATE_LINKS:
            return {
                previousState: state,
                nodes: state.nodes,
                links: action.payload,
                drawings: state.drawings,
                symbols: state.symbols
            }
        case ProjectActionTypes.UPDATE_DRAWINGS:
            return {
                previousState: state,
                nodes: state.nodes,
                links: state.links,
                drawings: action.payload,
                symbols: state.symbols
            }
        case ProjectActionTypes.UPDATE_SYMBOLS:
            return {
                previousState: state,
                nodes: state.nodes,
                links: state.links,
                drawings: state.drawings,
                symbols: action.payload
            }
        default:
            return state
    }
}
