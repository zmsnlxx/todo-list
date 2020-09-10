import moment from 'moment'
moment.locale('zh-cn')

export const formatDate = (date: number) => {
  return moment(date).format("MMMDo")
}
