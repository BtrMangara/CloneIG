import Cookies from "js-cookie";
import { Navigate } from "react-router";
import Swal from "sweetalert2";

export default function ProtectedRoutes({children}) {
    const token = Cookies.get('Authorization');
    if(!token){
        Swal.fire({
            icon: 'error',
            title: 'Anda Harus Login',
            text: 'Silahkan Login!',
            
          })
        return (<Navigate to ='/login' replace={true}/>)
    }
}
