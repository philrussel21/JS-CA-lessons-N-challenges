// // function one(num = 1) {
// //   return num
// // }
// // const one = (n = 1) => (cb = null) => cb ? cb(n) : n;

// function one(n = 1) {
//   (cb = null) => {
//     return cb ? cb(n) : n
//   }
// }

// function two(num = 2) {
//   return num
// }

// function three(num = 3) {
//   return num
// }

// function plus(num1, num2) {
//   return num1 + num2
// }

// function minus(num) {

// }

// function divide(num) {

// }

// function multiply(num) {

// }

// function curry(f) { // curry(f) does the currying transform
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// let curriedSum = curry(plus)

// console.log(curriedSum(1)(2))
// console.log(curriedSum(1)(one()))


// module.exports = {
//   one, two, three, plus, minus, divide, multiply
// }

// EASIER MODE?

// Selectors
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#input')
  const nums = document.querySelectorAll('.nums')
  const cancel = document.querySelector('#cancel')
  const ops = document.querySelectorAll('.ops')
  const plus = document.querySelector('#plus')
  const minus = document.querySelector('#minus')
  const multiply = document.querySelector('#multiply')
  const divide = document.querySelector('#divide')
  const equals = document.querySelector('#equals')
  const answer = document.querySelector('#answer')
  var num1;
  var num2;
  var op;

  // Listeners
  nums.forEach((num) => {
    num.addEventListener('click', (e) => {
      input.value += e.target.textContent
    })
  })

  cancel.addEventListener('click', () => {
    num1 = null
    num2 = null
    op = null
    answer.value = ""
  })

  ops.forEach((op) => {
    op.addEventListener('click', () => {
      if (num1) {
        num2 = parseInt(input.value)
        input.value = ""
      } else {
        num1 = parseInt(input.value)
        input.value = ""
      }
    })
  })

  plus.addEventListener('click', () => {
    op = addition
  })

  minus.addEventListener('click', () => {
    op = subtraction
  })

  multiply.addEventListener('click', () => {
    op = multiplication
  })

  divide.addEventListener('click', () => {
    op = division
  })

  equals.addEventListener('click', () => {
    answer.value = ""
    const result = performOp(num1, op, num2)
    answer.value = result
    // num1 = result
    num1 = null
  }
  )

})

// const input = document.querySelector('#input')
// const nums = document.querySelectorAll('.nums')
// const cancel = document.querySelector('#cancel')
// const ops = document.querySelectorAll('.ops')
// const plus = document.querySelector('#plus')
// const minus = document.querySelector('#minus')
// const multiply = document.querySelector('#multiply')
// const divide = document.querySelector('#divide')
// const equals = document.querySelector('#equals')
// const answer = document.querySelector('#answer')
// var num1;
// var num2;
// var op;

// // Listeners
// nums.forEach((num) => {
//   num.addEventListener('click', (e) => {
//     input.value += e.target.textContent
//   })
// })

// cancel.addEventListener('click', () => {
//   num1 = null
//   num2 = null
//   op = null
//   answer.value = ""
// })

// ops.forEach((op) => {
//   op.addEventListener('click', () => {
//     if (num1) {
//       num2 = parseInt(input.value)
//       input.value = ""
//     } else {
//       num1 = parseInt(input.value)
//       input.value = ""
//     }
//   })
// })

// plus.addEventListener('click', () => {
//   op = addition
// })

// minus.addEventListener('click', () => {
//   op = subtraction
// })

// multiply.addEventListener('click', () => {
//   op = multiplication
// })

// divide.addEventListener('click', () => {
//   op = division
// })

// equals.addEventListener('click', () => {
//   answer.value = ""
//   const result = performOp(num1, op, num2)
//   answer.value = result
//   // num1 = result
//   num1 = null
// }
// )


// FUNCTIONS

function addition(num1, num2) {
  return num1 + num2
}

function subtraction(num1, num2) {
  return num1 - num2
}

function multiplication(num1, num2) {
  return num1 * num2
}

function division(num1, num2) {
  return num1 / num2
}

function performOp(num1, op, num2) {
  return op(num1, num2)
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  performOp
}