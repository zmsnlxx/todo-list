declare namespace User {
  interface AuthParams {
    name: string
    password: string
    psw?: string
  }
  interface Info {
    name: string
    todo: any[]
    headPortrait: string
  }
}
