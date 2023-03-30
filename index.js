export const settablenumber = (value)  =>
     async (dispatch)  =>  {
        dispatch({
            type:  "SETTABLENUMBER",
            payload: value
        })
        
     }