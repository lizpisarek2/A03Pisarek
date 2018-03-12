function letsMultiplyApp() {
    var first = eval(document.theForm.elements[0].value)
    var second = eval(document.theForm.elements[1].value)
    var answer = first * second
    alert("The answer of " + first + " times " +
        second + " is " + answer + ".")
}

function letsMultiply(first, second) {
    if (typeof first !== 'number') throw Error ('First must be a number!')
    if (typeof second !== 'number') throw Error ('Second must be a number!')
    var answer = first * second
    return answer

}