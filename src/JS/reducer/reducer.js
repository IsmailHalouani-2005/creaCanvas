import { ARTICLE_ADD, ARTICLE_BUY, ARTICLE_EDIT, ARTICLE_DELETE } from "../action-types/action-types";

const initialState = {
        canvas: []
   };
   
   function reducer(state = initialState, action) {
        switch (action.type) {
            case ARTICLE_ADD: 
                return {
                    ...state,
                    canvas: state.canvas.map(e => {
                        if (e.Height == action.payload && e.Width == action.payload) {
                            e.Nbr += action.payload
                        }
                        return [...state.canvas, action.payload]
                    }) 
                }
            case ARTICLE_EDIT:
                return {
                    ...state,
                    canvas: state.canvas.map(e => {
                        if (e.ID !== action.payload) {
                            return e
                        }
            
                        return {
                            ...e,
                            Nbr: action.payload,
                        }
                    })
                }
            case ARTICLE_DELETE:
                return {
                    ...state,
                    canvas: state.canvas.filter(e => e.ID !== action.payload)
                }
            case ARTICLE_BUY:
                return [...state.canvas, initialState.canvas]
        }
   };
   

   export default reducer;