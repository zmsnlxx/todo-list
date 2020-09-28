import { generateApi } from '@/api'

export const getUserCheckList = generateApi<null, User.TodoItem>('/v1/list/getUserCheckList')

export const getListTask = generateApi<{ id: string, parentId: string }, User.TodoListItem>('/v1/list/getListTask')

export const updateListTask = generateApi<User.UpdateListTaskParams, User.TodoListItem>('/v1/list/updateListTask', 'post')

export const deleteListTask = generateApi<User.DeleteListTaskParams, null>('/v1/list/deleteListTask', 'post')

