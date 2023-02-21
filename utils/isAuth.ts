import { UserState } from "@/redux/userSlice/userSlice";

export const isAuth = (user: UserState) => {
    if(!user.data && user.status === 'idle' && localStorage.getItem('balloons-shop-verify-token')){
        return false
    }else{
        return true
    }
}