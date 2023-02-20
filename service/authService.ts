import { client } from "./client"
import { RegisterFormValues, LoginFormValues } from "@/types/authFormValues";
import { User } from "@/types/user";
import { updateToken } from "@/utils/tokenActions";

const namespace = "auth";

const register = async (payload: RegisterFormValues): Promise<User> => {
    const { data } = await client.post<User>(`/${namespace}/register`, payload);
    updateToken(data.token);
    return data;
};

const login = async (payload: LoginFormValues): Promise<User> => {
    const { data } = await client.post<User>(`/${namespace}/login`, payload);
    updateToken(data.token);
    return data;
};

const getUser = async (token: string): Promise<User> => {
    const { data } = await client.post<User>(`/${namespace}/get-user`, null, {headers: {
        Authorization: 'Bearer ' + token
    }});

    return data;
}

export {
    register,
    login,
    getUser
}