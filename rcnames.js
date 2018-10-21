const animals = [
  "owl", "parrot",
  "monkey", "frog",
  "bear", "rhino",
  "lizard", "fox",
  "rabbit", "pig",
  "otter", "rat",
  "turtle", "cat",
  "dog", "whale",
  "snail", "squid",
  "fish", "sponge",
  "koala", "sloth",
  "turkey", "walrus",
  "llama", "hippo",
  "penguin", "camel",
  "baboon", "orca",
  "hedgehog", "panda",
  "beaver", "hamster",
  "dolphin", "shark"
];

const color = [
  "black", "white", "gray", "red", "blue", "green",
  "yellow", "cyan", "purple", "brown", "orange", "tan",
  "pink", "honey", "ginger", "violet", "lime", "coffee",
  "silver", "metal", "smoke", "mint", "coral", "butter",
]

const adjectives = [
  "angry", "happy", "hungry", "mad",
  "cute", "cuddly", "crazy", "fat",
  "jiggly", "clumsy", "sad", "funny",
  "big", "dirty", "kinky", "tiny",
  "broke", "brave", "tired", "lost",
  "deep", "nerdy", "woke", "lonely"
];

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'w', 'x', 'y', 'z'];
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                'W', 'X', 'Y', 'Z'];

const repo = {
  animal: animals,
  color: color,
  adj: adjectives,
  num: num,
  lower: lower,
  upper: upper
};

const pick = list => list[Math.floor(Math.random() * list.length)];

const handle = format => {
  if (format[0] == '<') {
    let [main, num] = format.split('*').map(_ => _.trim());
    let list = main.substr(1, main.length - 2)
                  .split('|')
                  .map(_ => _.trim())
                  .reduce((all, bit) => all.concat(repo[bit] || []), []);

    count = num?parseInt(num):1;

    let result = '';
    for (let i = 0; i < count; i++)
      result += pick(list);

    return result;
  }
  else return format;
}

module.exports = (...segments) => {
  return segments.map(handle).join('');
}

module.exports.pick = pick;
