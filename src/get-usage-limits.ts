// determine plan usage by role limits to ms, used across multiple services. The values are static for transparency
export const getUsageLimitsMs = (role: number): number => {
    let usage = 0
  
    switch (role) {
      case 0: {
        usage = 10000
        break
      }
      // normal plans
      case 1: {
        usage = 300000
        break
      }
      case 2: {
        usage = 600000
        break
      }
      case 3: {
        usage = 1400000
        break
      }
      case 4: {
        usage = 2000000
        break
      }
      case 5: {
        usage = 4000000
        break
      }
      // high tier plans
      case 6: {
        usage = 5000000
        break
      }
      case 7: {
        usage = 10000000
        break
      }
      case 8: {
        usage = 20000000
        break
      }
      case 9: {
        usage = 35000000
        break
      }
      case 10: {
        usage = 60000000
        break
      }
      // account blocked!
      case 11: {
        usage = 0
        break
      }
      default: {
        usage = 10000
        break
      }
    }
  
    return usage
  }