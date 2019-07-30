const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'jorge',
    //   age: 31
    // });
    reject('something went wrong!!!');
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log(data, 1);
}).catch((error) => {
  console.log('error: ', error);
})

console.log('after');
