/*function quizformjscode() {
    var qI1 = document.getElementById("q1").value
    var qI2 = document.getElementById("q2").value
    var qI3 = document.getElementById("q3").value
    var qI4 = document.getElementById("q4").value
    var qI5 = document.getElementById("q5").value
    var qI6 = document.getElementById("q6").value
    var qI7 = document.getElementById("q7").value
    var qI8 = document.getElementById("q8").value
    var qI9 = document.getElementById("q9").value
    var qI10 = document.getElementById("q10").value
} */
function checkanswer() {
    const answers = {
        q1:"joe biden",
        q2:"george washington",
        q3:"169",
        q4:"24",
        q5:"6 bce",
        q6:"north american free trade agreement",
        q7:"north america",
        q8:"usa",
        q9:"mount vesuvius",
        q10:"larry page"
    }
    var score = 0
    for(const question in answers){
        const useranswer = document.getElementById(`${question}`).value.toLowerCase()
        if(useranswer === answers[question]){
            score++
        }
        const resultElement = document.getElementById("result");
    resultElement.textContent = `Your score: ${score} out of ${Object.keys(answers).length}`;
    }
}