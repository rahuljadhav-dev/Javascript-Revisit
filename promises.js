const ticketPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket booked 🎟️");
  }, 2000);
});

ticketPromise.then(result => {
  console.log(result);
});

// const ticketPromise2 = new Promise((resolve, reject) => {
//   reject("Train cancelled ❌");
// });

// ticketPromise2
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// async function bookTicket() {
//   const result = await ticketPromise;
//   console.log(result);
// }

// bookTicket();

console.log("hey rahul i am running my own...");


