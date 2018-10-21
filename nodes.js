const platform = require('connect-platform');
const rcnames = require('./rcnames');


platform.core.node({
  path: '/rcnames/get/',
  public: false,
  method: 'GET',
  inputs: ['format'],
  outputs: ['name'],
  controlOutputs: [],
  hints: {
    node: 'creates a random code name based on given <span class="hl-blue">format</span>.',
    inputs: {
      format:
`the format of the code name. can be a string or list of strings, whose results will be concatenated together.
example: "<num | lower> * 3" will generate a string of 3 numbers or lowercase characters,
and ["project-", "<animal>", "::", "<num> * 2"] will result in likes of "project-cat::23".`,
    },
    outputs: {
      name: 'the randomly generated codename.'
    },
  }
},
  (inputs, output, control) => {
    if (typeof inputs.format == 'string') output('name', rcnames(inputs.format));
    else output('name', rcnames(...inputs.format));
  }
);
