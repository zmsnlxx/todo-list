import { generateApi } from '@/api'

export const updatePersonalInfo = generateApi<User.AuthUpdateParams, null>('/v1/auth/updateUserInfo', 'post')
