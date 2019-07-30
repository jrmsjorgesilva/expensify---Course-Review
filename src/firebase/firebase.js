import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDAfytAt6EzVmN2dJqR5bO7X_QN7LnGmoo",
  authDomain: "expensifyapp-2-the-revenge.firebaseapp.com",
  databaseURL: "https://expensifyapp-2-the-revenge.firebaseio.com",
  projectId: "expensifyapp-2-the-revenge",
  storageBucket: "",
  messagingSenderId: "850843005058",
  appId: "1:850843005058:web:536dac4cda0adc5a"
};

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//
// //CHILD_REMOVED
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //CHILD_CHANGED
// database.ref().on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //CHILD_ADDED
// database.ref().on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //
// database.ref().on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


//INSERINDO ARRAYS NO BD COM PUSH()
// database.ref(`expenses`)
//   .push({
//     description: 'this is the description',
//     note: 'this is my note(burnproof)',
//     amount: 540,
//     createdAt: 105000
// })
//   .database.ref(`expenses`).push({
//     description: 'this is the second description',
//     note: 'this is my note(really burnproof)',
//     amount: 13440,
//     createdAt: 1000430
// })
//   .database.ref(`expenses`).push({
//     description: 'this is the third (GOD!) description',
//     note: 'this is my note(hope this works)',
//     amount: 1340,
//     createdAt: 14000
// })
//   .then(() => {
//     console.log('data saved to DB')
// })
//   .catch((e) => {
//     console.log('error: ', e);
// });

// database.ref('notes/-Lkl484FowhQckNhNVtb').remove();

// database.ref().set({
//   name: 'john burner'
// });



// const firebaseNotes = {
//   notes: {
//     dsfdsfd: {
//       title: 'note one',
//       body: 'this is my note'
//     },
//     fdsfsfdsfs: {
//       title: 'note (is anybody counting?)',
//       body: 'this is my other note(fireproof!)'
//     }
//   }
// };
//
// const notes = [{
//   id: '1ff34526',
//   title: 'note one',
//   body: 'this is my note'
// },
// {
//   id: '34543e12',
//   title: 'note two',
//   body: 'this is my note two, the one burned down'
// },
// {
//   id: '331as2d21',
//   title: 'note Three',
//   body: 'godamn fires!'
// }];
//
// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
//   const obj = snapshot.val();
//   console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}!`);
// });


// database.ref('location').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });



// database.ref('location').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('location').update({
//     'location/temperature': 34
//   }).then(() => {
//     console.log('data saved');
//   }).catch((e) => {
//     console.log('error', e);
//   });
// }, 3000)

//FETCHING DATA WITH 'ONCE' METHOD
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);
//   });


// database.ref().set({
//   name: 'jorge',
//   age: 31,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'lovecode INC'
//   },
//   location: {
//     city: 'São Caetano',
//     country: 'Brasil'
//   }
// }).then(() => {
//   console.log('Data is saved sucessfully!');
// }).catch((e) => {
//   console.log('error: ', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Sysmap',
//   'location/city': 'São Paulo'
// }).then(() => {
//   console.log('data saved');
// }).catch((e) => {
//   console.log('error', e);
// });


//UPDATE
// database.ref().update({
//   name: 'mike',                             //atualiza campo especifico
//   age: 29,                                  //atualiza campo especifico
//   job: 'garbage collector',                 //adiciona campo especifico
//   isSingle: null                            //apaga campo especifico
// });


//REMOVENDO DATABASES
// database.ref('isSingle').set(null);          //remove only 'isSingle'
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data removed');
//   }).catch((e) => {
//     console.log('error', e)
//   });

// database.ref().set(undefined);
//database.ref('age').set(27);                  //apaga apenas 'age'
//database.ref('location').set(27);             //apaga location inteira

// database.ref('location/city').set('amapá');     //apaga apenas city dentro de location
//
// database.ref('attributes').set({
//   height: 10,
//   weight: 10
// }).then(() => {
//   console.log('Another data is saved now!');
// }).catch((e) => {
//   console.log('ERROR -> ', e);
// });
//
