import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export default function dayFormat(value: string) {
  return dayjs(value).fromNow()
}
