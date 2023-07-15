import React, {useState, useEffect} from "react";
import axiosInstance from "../Axios";
import { useHistory } from "react-router-dom";

export default function SignOut() {
    const history = useHistory();

    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push('/');
    })
    return (
        <div>SignOut</div>
    )
}
