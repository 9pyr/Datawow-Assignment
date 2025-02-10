export default function getCookie(name: string) {
  if (typeof document !== "undefined") {
    const result = document.cookie
      .split(";")
      .find((cookie) => cookie.startsWith(`${name}=`))
    return result?.substring(name.length + 1)
  }
}
