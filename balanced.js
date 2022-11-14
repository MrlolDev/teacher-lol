(async () => {
  var string = "[[[[]]]]";
  var arrOfSring = string.split("");
  if (arrOfSring[arrOfSring.length] == "[") {
    console.log(false);
    return;
  }
  var results = [];
  for (var i = 0; i < arrOfSring.length; i++) {
    if (arrOfSring[i] == "]" && arrOfSring[i - 1] == "[") {
      console.log(`${i} and ${i - 1} are removed`);
      results = results.splice(i - 1, 1);
    } else {
      results.push(arrOfSring[i]);
    }
    console.log(results);
  }
  console.log(results.length > 0 ? false : true);
})();
