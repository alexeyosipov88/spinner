let spinner = ["|", '/', '-', '\\', '|', '/', '-', '\\', '|', '/'];
  let time = 100;
  for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, time);
  time += 200;
}