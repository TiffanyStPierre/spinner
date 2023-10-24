const charArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timerDelay = 100;

charArray.forEach((item) => {
  setTimeout(() => {
    process.stdout.write(item);
  }, timerDelay);

  timerDelay += 200;
});