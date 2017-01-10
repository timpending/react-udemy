// function getTempCallback (location, cb){
//   // CB for success where err is undefined
//   cb(undefined, 78);
//   //CB for fail when err occurs
//   cb('City not found');
// }
//
// getTempCallback('Denver', (err, temp)=>{
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise (location){
//   return new Promise( (resolve, reject) => {
//     resolve(79);
//     reject('City not found')
//   });
// }
//
// getTempPromise('Denver').then( (temp)=>{
//   console.log('Promise Success', temp);
// }, (err) =>{
//   console.log('promise error', err);
// });

// Add Challenge
// add numbers
// add num plus string

function addPromise (a, b){
  return new Promise( (resolve, reject) => {
    setTimeout(()=>{
      if (typeof a ==='number' && typeof b ==='number'){
          resolve(a+b);
      } else {
        reject('Numbers only. Check your inputs.')
      }
    }, 500);
  });
}

addPromise(5, 6).then((sum)=>{
  console.log('promise success', sum);
}, (err) =>{
  console.log('promise error', err);
});

addPromise(5, 'yo').then((sum)=>{
  console.log('promise success', sum);
}, (err) =>{
  console.log('promise error', err);
});
