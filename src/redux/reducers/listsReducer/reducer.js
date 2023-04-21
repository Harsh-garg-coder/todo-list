import { ADD_LIST, REMOVE_LIST, RENAME_LIST } from "./actionTypes";

const initialState = {
    lists : {
        "todo" : [],
        "in progress" : [],
        "completed" : []
    }
};

export const listsReducer = (state = initialState, action) => {
    if(action.type === ADD_LIST) {
        const newLists = {...state.lists};
        newLists[action.payload.listName] = [];
        return newLists;
    }

    if(action.type === REMOVE_LIST) {
        const newLists = {...state.lists};
        delete newLists[action.payload.listName];
        return newLists;
    }

    if(action.type === RENAME_LIST) {
        const newLists = {...state.lists};
        newLists[action.payload.listNewName] = newLists[action.payload.listOldName];
        delete newLists[action.payload.listOldName];
        return newLists;
    }
}

