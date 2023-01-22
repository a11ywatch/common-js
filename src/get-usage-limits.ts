export const multiplier = (n: number, x: number = 30) => n * x

const BASE = multiplier(10000, 6)

export const BASE_L1 = multiplier(300000)
export const BASE_L2 = multiplier(600000)
export const BASE_L3 = multiplier(1400000)
export const BASE_L4 = multiplier(2000000)
export const BASE_L5 = multiplier(4000000)
export const BASE_H1 = multiplier(5000000)
export const BASE_H2 = multiplier(10000000)
export const BASE_H3 = multiplier(20000000)
export const BASE_H4 = multiplier(35000000)
export const BASE_H5 = multiplier(60000000)

// determine plan usage by role limits to ms, used across multiple services. The values are static for transparency
export const getUsageLimitsMs = (role: number): number => {
    let usage = 0
  
    switch (role) {
      case 0: {
        usage = BASE
        break
      }
      // normal plans
      case 1: {
        usage = BASE_L1
        break
      }
      case 2: {
        usage = BASE_L2
        break
      }
      case 3: {
        usage = BASE_L3
        break
      }
      case 4: {
        usage = BASE_L4
        break
      }
      case 5: {
        usage = BASE_L5
        break
      }
      // high tier plans
      case 6: {
        usage = BASE_H1
        break
      }
      case 7: {
        usage = BASE_H2
        break
      }
      case 8: {
        usage = BASE_H3
        break
      }
      case 9: {
        usage = BASE_H4
        break
      }
      case 10: {
        usage = BASE_H5
        break
      }
      // account blocked!
      case 11: {
        usage = 0
        break
      }
      default: {
        usage = BASE
        break
      }
    }
   
    return usage
  }