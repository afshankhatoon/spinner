function spinner(){
  const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
  process.stdout.write('hello from spinner1.js... \rheyyy\n');
  let when = 0;
  for (const char of chars) {
    when += 200;
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, when);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, when);
}
spinner();