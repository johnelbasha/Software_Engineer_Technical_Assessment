/* Data Structure
const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]
  
  const accountTypeChecker = (accountBalanceHistory) => {
  
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.

  // Write your logic here  - No pressure 😁 //
  let result;

  return result ? "A" : "B";
};
  */

function accountTypeChecker(data) {
// data is an array of objects, with each object representing the data from a month
// step 1: built an empty array called closingBalances
// step 2: loop through each objective inside the array 'data'
    // 2.1: for each object:
        // 2.1.1 access the key called 'account', the value is an object
        // 2.1.2 within this object, access the key 'balance', the value is an object
        // 2.1.3 within this object, access the key 'amount', the value is an integer/number
        // 2.1.4 take this value and append closingBalances
// Step 3: now we have an array with three entries we can do an if statement as follows
    // 3.1 if the difference between the first and second numbers is the same as the difference between the second and third,
        // 3.1.a return 'B'
        // 3.1.b otherwise return 'A'
    return 'A'
}; 

module.exports.accountTypeChecker = accountTypeChecker;