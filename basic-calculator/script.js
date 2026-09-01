let calculatorInput = [];
document.getElementById("calculator").addEventListener("click", (event) => {
    console.log("calculator clicked");
    event.stopPropagation();
})

document.getElementById("display").addEventListener("click", (event) => {
    console.log("display clicked");
    event.stopPropagation();
})

document.querySelectorAll(".btn").forEach((digit) => {
    digit.addEventListener("click", (event) => {
        calculatorInput.push(digit.textContent);
        console.log("Calculator Array:", calculatorInput);
        document.getElementById("display").textContent = calculatorInput.join("")
        event.stopPropagation();
    })
})

document.querySelectorAll(".operator").forEach((operator) => {
    operator.addEventListener("click", (event) => {
        calculatorInput.push(operator.textContent);
        console.log("Calculator Array:", calculatorInput);
        document.getElementById("display").textContent = calculatorInput.join("")
        event.stopPropagation();
    })
})


document.querySelectorAll(".operation").forEach((operation) => {
    operation.addEventListener("click", (event) => {
        let action = operation.textContent;
        calculatorInput.push(action);
        console.log("Calculator Array:", calculatorInput);

        if (action === "=") {
            let fullString = calculatorInput.join('')
            let formattedInput = fullString.split(/([+\-*/=])/).filter(item => item !== "");
            let sum = 0;

            // for (let i = 0; i < calculatorInput.length; i++) {
            //     if (calculatorInput[i] === "+") {
            //         sum = Number(calculatorInput[i - 1]) + Number(calculatorInput[i + 1]);
            //     }
            //     if (calculatorInput[i] === "-") {
            //         sum = Number(calculatorInput[i - 1]) - Number(calculatorInput[i + 1]);
            //     }
            //     if (calculatorInput[i] === "*") {
            //         sum = Number(calculatorInput[i - 1]) * Number(calculatorInput[i + 1]);
            //     }
            //     if (calculatorInput[i] === "/") {
            //         sum = Number(calculatorInput[i - 1]) / Number(calculatorInput[i + 1]);
            //     }
            // }

            for (let i = 0; i < formattedInput.length; i++) {
                if (formattedInput[i] === "+") {
                    sum = Number(formattedInput[i - 1]) + Number(formattedInput[i + 1]);
                }
                if (formattedInput[i] === "-") {
                    sum = Number(formattedInput[i - 1]) - Number(formattedInput[i + 1]);
                }
                if (formattedInput[i] === "*") {
                    sum = Number(formattedInput[i - 1]) * Number(formattedInput[i + 1]);
                }
                if (formattedInput[i] === "/") {
                    sum = Number(formattedInput[i - 1]) / Number(formattedInput[i + 1]);
                }
            }

            console.log("Final Sum:", sum);
            document.getElementById("display").textContent = calculatorInput.join("")+sum
            calculatorInput = [];
        }

        if (action === 'C') {
            calculatorInput = [];
            console.log("Input Cleared", calculatorInput);
            document.getElementById("display").textContent = "enter number"
        }
        event.stopPropagation();
    });
});



