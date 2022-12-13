const filter = (...args) => {
  return args.filter((element) => element == 30);
};

console.log(filter(10, 20, 30, 40, 30, 40, 30, 10, 20, 50, 40, 20));
