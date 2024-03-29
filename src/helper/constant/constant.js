export const userInfo = [
  {
    id: 1,
    name: "Mike",
    age: 30,
    isSingle: false,
  },
  {
    id: 2,
    name: "Tim",
    age: 50,
    isSingle: true,
  },
  {
    id: 3,
    name: "John",
    age: 45,
    isSingle: false,
  },
  {
    id: 4,
    name: "Jerry",
    age: 35,
    isSingle: false,
  },
  {
    id: 5,
    name: "Alex",
    age: 34,
    isSingle: true,
  },
];

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}
