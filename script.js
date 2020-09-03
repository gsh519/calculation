let result = document.getElementById("result");

    function update(elem) {
      result.value = elem;
    }

    function edit(elem) {
      result.value += elem.value;
    }
    function calc() {
      result.value = new Function("return " + result.value)();
    }