import { generateApi } from '@/api'

export const getUserCheckList = generateApi<null, User.TodoItem[]>('/v1/auth/getUserCheckList')

