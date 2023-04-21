import { ADD_LIST, REMOVE_LIST, RENAME_LIST } from "./actionTypes";

export const addList = (newListName) => {
    return {
        type : ADD_LIST,
        payload : {
            listName : newListName
        }
    }
}

export const removeList = (listToRemove) => {
    return {
        type : REMOVE_LIST,
        payload : {
            listName : listToRemove 
        }
    }
}

export const renameList = (listOdlName, listNewName) => {
    return {
        type : RENAME_LIST,
        payload : {
            listOldName : listOdlName,
            listNewName : listNewName
        }
    }
}