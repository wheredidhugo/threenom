# threenom

🌐 Check for free (and paid) domains on Freenom

# Installation

```bash
$ npm i threenom
```

# Usage

```js
// Checks only for free domains
const threenom = require("threenom");

async function test() {
  let test = await threenom("test");
  console.log(test);
}

test();
```

#### With options

```js
const threenom = require("threenom");

async function test() {
  let test = await threenom("test", {
    freeDomains: true,
    paidDomains: true,
  });
  console.log(test);
}

test();
```
