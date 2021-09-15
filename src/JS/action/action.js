import { ARTICLE_ADD, ARTICLE_BUY, ARTICLE_EDIT, ARTICLE_DELETE } from "../action-types/action-types";

export const addArticle = newArticle => {
    return {
        type: ARTICLE_ADD,
        payload: newArticle,
    }
}

export const editArticle = thisArticle => {
    return {
        type: ARTICLE_EDIT,
        payload: thisArticle,
    }
}

export const buyArticle = theArticle => {
    return {
        type: ARTICLE_BUY,
        payload: theArticle,
    }
}

export const deleteArticle = delArticle => {
    return {
        type: ARTICLE_DELETE,
        payload: delArticle,
    }
}