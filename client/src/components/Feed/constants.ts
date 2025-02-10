import { keys, map, reduce } from "lodash"

export enum Community {
  History = "history",
  Food = "food",
  Pets = "pets",
  Health = "health",
  Fashion = "fashion",
  Exercise = "exercise",
  Other = "other",
}

export const communityOptions = map(Community, (value, label) => ({
  value,
  label,
}))

export const mapCommunity = reduce(
  keys(Community) as (keyof typeof Community)[],
  (prev, curr: keyof typeof Community) => {
    return { ...prev, [Community[curr]]: curr }
  },
  {}
) as Record<string, string>
