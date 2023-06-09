import { instance } from "common/api/common.api";

export const AuthApi = {
  register: (data: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", data);
  },
  login: (data: ArgLoginType) => {
    return instance.post<ProfileType>("auth/login", data);
  },
  logout: () => {
    return instance.delete<ProfileType>("auth/me");
  },
  me: () => {//TODO
    return instance.post<ProfileType>("/auth/me");
  },
  forgot: (data: ArgForgotType) => {
    return instance.post<any>("/auth/forgot", data);
  },
  setNewPassword: (data: ArgSetNewPasswordType) => {
    return instance.post<any>("/auth/set-new-password", data);
  },
  editProfile: (data: ArgEditProfileType) => {
    return instance.put<EditableProfileType>("auth/me", data);
  },

};

//types

export type EditableProfileType = {
	updatedUser: ProfileType;
	token: string;
	tokenDeathTime: number;
}


export type ArgEditProfileType = {
  name: string
  avatar: string
}

export type ArgSetNewPasswordType = {
  password: string
  resetPasswordToken: string | undefined
}

export type ArgForgotType = {
  email: string
  from: string
  message: string
}


export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">

export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type RegisterResponseType = {
  addedUser: Omit<ProfileType, "token" | "tokenDeathTime">
}

export type ProfileType = {
  _id: string;
  avatar?:string
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;

  token: string;
  tokenDeathTime: number;
}