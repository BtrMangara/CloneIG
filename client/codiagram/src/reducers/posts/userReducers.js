import { REGISTER_USER, LOGIN_USER} from "../../actions/UserAction";

const initialState = {
    registerUserResult :false,
    registerUserLoading:false,
    registerUserError:false,

    loginUserResult :false,
    loginUserLoading:false,
    loginUserError:false
}

const UserReducers = (state=initialState,action)=>{
    switch (action.type) {
        case REGISTER_USER:
            return{
                ...state,
                registerUserResult: action.payload.data,
                registerUserLoading: action.payload.loading,
                registerUserError: action.payload.errorMessage
            }

        case LOGIN_USER:
            return{
                ...state,
                loginUserResult:action.payload.data,
                loginUserLoading: action.payload.loading,
                loginUserError: action.payload.errorMessage
            }

        default: 
            return state;
    }
}

export default UserReducers;