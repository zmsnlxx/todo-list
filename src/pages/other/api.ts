import { generateApi } from '@/api'

export const login = generateApi<User.AuthParams, string>('/v1/auth/login', 'post')

export const register = generateApi<User.AuthParams, string>('/v1/auth/register', 'post')

export const getUserInfo = generateApi<null, any>('/v1/auth/getUserInfo')

