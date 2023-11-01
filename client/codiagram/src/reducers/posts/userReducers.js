import { REGISTER_USER } from "../../actions/UserAction";

const initialState = {
    registerUserResult :false,
    registerUserLoading:false,
    registerUserError:false,

}

const UserReducers = (state=initialState,action)=>{
    switch (action.type) {
        case "REGISTER_USER":
            return{
                ...state,
                registerUserResult: action.payload.data,
                registerUserLoading: action.payload.loading,
                registerUserError: action.payload.errorMessage
            }

        default: 
            return state;
    }
}

export default UserReducers;