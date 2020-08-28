type AnyObject = Record<string, any>

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
  }
}
