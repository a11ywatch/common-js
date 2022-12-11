# @a11ywatch/website-source-builder

This package is used throughout the A11yWatch eco system as re-usable utils.
The purpose of this lib is to handle custom edge cases that are required for the system and found being used throughout the system like converters and data handling functions.

## Installation

`npm install @a11ywatch/website-source-builder`

```typescript
import { sourceBuild } from "@a11ywatch/website-source-builder"

const data = sourceBuild("https://a11ywatch.com");

//  output {
//       cdnJsPath: `a11ywatch.com/www-a11ywatch-com-ada-fix.js`,
//       cdnMinJsPath: `a11ywatch.com/www-a11ywatch-com-ada-fix.min.js`,
//       cdnSourceStripped: "www-a11ywatch-com-ada-fix",
//       domain: "a11ywatch.com",
//       pageUrl: "https://a11ywatch.com",
//       url: "https://a11ywatch.com"
//     }
```

## Utils

This repo handles the usage limits that map to each plan or role. The usage is returned as ms. 

The other utils are set to build custom shapes that help display or use values in A11yWatch that 
may just be used in memory.