let input = ""
let equal = document.querySelector(".equal")
let clear = document.querySelector(".div-c")
let total = document.querySelector(".div-total")
let numbersDiv = document.querySelectorAll(".numbers")
let operatorsDiv = document.querySelectorAll(".operators")
let decimal = document.querySelector(".decimal")


clear.addEventListener("click", function() {
  input = ""
  total.innerHTML = ""
});

decimal.addEventListener("click", function() {
  input += decimal.id
  total.innerHTML = input
})

equal.addEventListener("click", function() {
  let result = eval(input)
  total.innerHTML = result
})

for (let i = 0; i < numbersDiv.length; i++) {
  let numDiv = numbersDiv[i]
  numDiv.addEventListener("click", function() {
    input += numDiv.id
    total.innerHTML = input
  });
}

for (let i = 0; i < operatorsDiv.length; i++) {
  let opDiv = operatorsDiv[i]
  opDiv.addEventListener("click", function() {
    input += opDiv.id
    total.innerHTML = input
  });
}
