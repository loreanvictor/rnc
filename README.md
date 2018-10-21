# rcnames
a simple module to generate random code names.

## setup
```bash
npm install rcnames
```

## how to use

you should pass a format string (or a multitude of them). each format string is either a static bit, which will appear in
the generated name as provided, or a randomized bit, which should be of the format `<list>`, or `<list1 | list2>` or
`<list1 | list2> * count`, which translates into a segment including `count` random items of `list` (or one of the given lists). example:

```javascript
const generate = require('rcnames');

//
// generates a string of 6 numbers or lowercase or uppercase characters.
//
generate('<lower | upper | num> * 6'); 

//
// generates a string like 'happy-rhino'.
//
generate('<adj | color>', '-', '<animal>'); 

//
// generates a string like 'project blue 76'.
//
generate('project ', '<color>', ' ', '<num | lower> * 2'); 
```

possible list names are:

- `animal`: animal names (36 items)
- `color`: some colors (24 items)
- `adj`: some adjectives (24 items)
- `num`: 0 - 9
- `lower`: lowercase english alphabet (26 items)
- `upper`: uppercase english alphabet (26 items)

## CONNECT platform

this is also a CONNECT platform package. you can find it under the name `rcnames`.
