# Sri Lanka NIC Utilities

A tiny utility to extract useful information out of a Sri Lankan NIC number such as date of birth and gender.

## Usage

Download node at nodejs.org and install it, if you haven't already.

```
npm install lanka-nic --save
```

.. of if you prefer using Yarn:

```
yarn add lanka-nic
```

```js
// The NIC numbers used as test cases and examples are randomly generated.
// Any resemblance to that of an actual person's is purely coincidental.

const lankaNIC = require("lanka-nic");
let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC("925182566V");
/*
    'dateOfBirth' should return: 1992-01-18T00:00:00.000Z
        as an instance of Date
    'gender' should return: female
        as a String
*/
```

## Tests

Either of the following should work depending on your preferences:
`npm test` or `yarn test`.

## Dependencies

No dependencies so far. The only dev dependencies I've included so far are for development purposes and not actually needed for the functioning of the module.

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
