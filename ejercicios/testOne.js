const count = [...Array(101).keys()]
  .map((_, k) => k++)
  .map((v) =>
    v % 5 === 0 ? "bazz" + ":" + v : v % 2 === 0 ? "buzz" + ":" + v : v
  );

console.log(count);




