const args = process.argv.slice(2);
const messages = ['No argument', 'Argument found', 'Arguments found'];

if (args.length === 0) {
  console.log(messages[0]);
} else if (args.length === 1) {
  console.log(messages[1]);
} else {
  console.log(messages[2]);
}


