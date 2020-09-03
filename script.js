let result = document.getElementById('result');

function update(del) {
  result.value = del;
  console.log(result.value);
}

function edit(num) {
  result.value += num.value;
  console.log(result.value);
}

function calc() {
  result.value = new Function("return " + result.value)();
  console.log(result.value);
}

