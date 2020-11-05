// select the form
const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('input[type="text"]');
const submitButton = document.querySelector('input[type="submit"]');


function handleInput(e) {
  // enable the submit button
  submitButton.disabled = false;
  // form.clear();
  const input = e.target;

  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
    // 1. select the text when the next input is focused
    // input.select();
  }

  // 3. support for backspacing from 1 input to another
  if (input.previousElementSibling) {
    if (e.inputType === "deleteContentBackward") {
      // input.value = '';
      input.previousElementSibling.focus();
    }

  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData("text");
  if (paste.length === 6) {
    // loop over each input and populate
    inputs.forEach((input, i) => {
      input.value = paste[i] || "";
      //   when we get to the last value to be pasted trigger submit
      if (i === inputs.length - 1) {
        input.value = paste[i] || "";
        // gather all the values
        // trigger submit
        form.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    });
  } else {
    alert('The length of the Item you\'re trying to paste is less that 6')
  }

  // 2. Auto submit the form if all fields are filled after a paste
  // check if all the input has a value
  // trigger the form.onsubmit event
}

inputs[0].addEventListener("paste", handlePaste);
// handle submit with the last input
inputs[inputs.length - 1].addEventListener("input", handleSubmit);

// addEventListener on the form for input event
form.addEventListener("input", handleInput);
// form.addEventListener("keypress", handleInput);
function handleSubmit(e) {
  e.preventDefault();
  let inputArr = [];
  for (let input of inputs) {
    // console.log(input)
    inputArr.push(input.value);
  }
  const allValues = inputArr.join("");
  console.log(allValues);
  console.log("form submitted");
  setTimeout(() => {
    alert(`form submitted with ${allValues}`);
    form.reset();
  }, 3000);
  return false;
}
// 1. select the text when the next input is focused
// inputs[0].addEventListener("focusin", (e) => {
//   const input = e.target;
//   if (input.value) {
//     input.focus();
//     input.select();
//   }
// });

// handle the submit form event
form.addEventListener("submit", handleSubmit);
