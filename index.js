// let mypromiss = new Promise((resolve, reject) => {
//   if (true) {
//     setTimeout(() => {
//       resolve('fulfilled');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject(new Error('reject'));
//     }, 2000);
//   }
// }).then(
//   (res) => console.log(res),
//   (err) => console.error(err)
// );

let Promise1 = Promise.resolve('promise1');
let Promise2 = 'promise2';
let Promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('fulfilled');
    }, 2000);
  } else {
    setTimeout(() => {
      reject(new Error('reject'));
    }, 2000);
  }
});
let Promise4 = Promise.reject('rejected');
Promise.all([Promise3, Promise1, Promise2]).then(
  (val) => console.log('promiseall-resolve :', val),
  (err) => console.error('promiseall-reject', err)
);

Promise.allSettled([Promise3, Promise1, Promise2, Promise4]).then(
  (val) => console.log('promiseAllsettled :', val),
  (err) => console.error('promisall-error', err)
);

Promise.any([Promise4, Promise3, Promise1, Promise2]).then(
  (val) => console.log('any :', val),
  (err) => console.error('any-err', err)
);

Promise.race([Promise4, Promise3, Promise1, Promise2]).then(
  (val) => console.log(val),
  (err) => console.error(err)
);
