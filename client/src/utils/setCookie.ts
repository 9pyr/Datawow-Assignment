export default function setCookie(key: string, value: string) {
  document.cookie = `${
    document.cookie ? `${document.cookie};` : ""
  } ${key}=${value}; path=/`
}
