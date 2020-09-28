type AnyObject = Record<string, any>

declare namespace Other {
  interface FormType {[key: string]: string | boolean | undefined | number}
}

declare namespace User {
  interface AuthParams {
    name: string
    password: string
    psw?: string
  }
  interface Info {
    name: string
    todo: any[]
    img: string
    birthday: string
    region: string
    regionName: string
    gender: string
  }
  interface AuthUpdateParams {
    img?: string | any
    birthday?: string
    regionName?: string
    region?: string
    gender?: string
    password?: string
    todo?: any[]
    newValue?: string
  }
  interface TodoItem {
    [id: string]: {
      title: string
      list: TodoListItem[]
    }
  }

  interface TodoListItem {
    title: string
    id: string
    isCarryOut: boolean //是否已完成
    endTime: number | undefined // 结束时间(时间戳)
    grade: string // 任务等级 0： 无优先级； 1：低优先级；2：中优先级；3：高优先级
    content: string // 任务内容
  }

  interface UpdateListTaskParams extends TodoListItem {
    parentId?: string
    type?: string
  }

  interface DeleteListTaskParams {
    id: string
    parentId: string
  }
}

