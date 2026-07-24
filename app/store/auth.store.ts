import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginResponse, User } from "@/app/types/auth";

interface AuthState {
    logged:boolean;
    accessToken:string | null;
    expiredAt:string | null;
    user:User | null;
    login:(data:LoginResponse)=>void;
    logout:()=>void;
}

export const useAuthStore=create<AuthState>()(
persist(
    (set)=>({
        logged:false,
        accessToken:null,
        expiredAt:null,
        user:null,

        login:(data)=>
        set({
            logged:true,
            accessToken:data.accessToken,
            expiredAt:data.expiredAt,
            user:data.user
        }),

        logout:()=>
        set({
            logged:false,
            accessToken:null,
            expiredAt:null,
            user:null
        })
    }),
    {   
        name:"auth"
    }
));