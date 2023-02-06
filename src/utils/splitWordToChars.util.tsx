export const splitWordToChars = (word: string | undefined, cb: (letter: string) => JSX.Element) => {
  return word?.split("").map(cb)
}