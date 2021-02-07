# @a11ywatch/website-source-builder

get pieces of data from a url

## Installation

`npm install @a11ywatch/website-source-builder`

```typescript
const { sourceBuild } = require("@a11ywatch/website-source-builder");

const data = sourceBuild("http://www.a11ywatch.com");

//  output {
//       cdnJsPath: `a11ywatch.com/www-a11ywatch-com-ada-fix.js`,
//       cdnMinJsPath: `a11ywatch.com/www-a11ywatch-com-ada-fix.min.js`,
//       cdnSourceStripped: "www-a11ywatch-com-ada-fix",
//       domain: "a11ywatch.com",
//       pageUrl: "http://www.a11ywatch.com",
//       url: "http://www.a11ywatch.com"
//     }
```
