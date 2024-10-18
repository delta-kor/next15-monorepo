namespace RandomUtil {
  export function createRandomHex(length: number) {
    return Math.floor(Math.random() * 16 ** length).toString(16)
  }
}

export default RandomUtil
