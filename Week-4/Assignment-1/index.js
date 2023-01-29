// A. Complete the function below to show a delayed result in the console.
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}

// B. To implement delayedResult again using promise this time. It should look like:
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (n1 === +n1 && n2 === +n2) resolve(n1 + n2);
      else reject(new Error("n1 or n2 is not a correct number!"));
    }, delayTime);
  });
}

// C. To implement it using async/await this time.
async function main() {
  try {
    const res = await delayedResultPromise(4, 5, 3000);
    console.log(res);
  } catch (e) {
    console.log(e.message);
  }
}

// #1
// delayedResult(4, 5, 3000, function (result) {
//   console.log(result);
// });
// // 9 (4+5) will be shown in the console after 3 seconds
// delayedResult(-5, 10, 2000, function (result) {
//   console.log(result);
// });
// 5 (-5+10) will be shown in the console after 2 seconds

// #2
// delayedResultPromise(4, 5, 3000)
//   .then(console.log)
//   .catch((e) => console.log(e.message));
// 9 (4+5) will be shown in the console after 3 seconds

// #3
// main(); // result will be shown in the console after <delayTime>seconds
