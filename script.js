let result = document.getElementById('result');

function update(del) {
  result.value = del;
}

function edit(num) {
  result.value += num.value;
}

function calc() {
  result.value = new Function(" return " + result.value)();
}

