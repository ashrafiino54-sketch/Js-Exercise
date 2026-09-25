function checkGrade() {

    const name = document.getElementById("studentName").value;
    const score = Number(document.getElementById("score").value);

    const result = document.getElementById("result");

    if (name === "") {

        result.innerHTML = "⚠️ Please enter your name";
        result.style.background = "#92400e";

    } else if (score < 0 || score > 100) {

        result.innerHTML = "⚠️ Score must be between 0 and 100";
        result.style.background = "#991b1b";

    } else if (score >= 90) {

        result.innerHTML = `🏆 ${name}, your grade is A — Excellent!`;
        result.style.background = "#166534";

    } else if (score >= 80) {

        result.innerHTML = `🥇 ${name}, your grade is B — Very Good!`;
        result.style.background = "#15803d";

    } else if (score >= 70) {

        result.innerHTML = `🥈 ${name}, your grade is C — Good!`;
        result.style.background = "#0369a1";

    } else if (score >= 60) {

        result.innerHTML = `📚 ${name}, your grade is D — Pass!`;
        result.style.background = "#a16207";

    } else {

        result.innerHTML = `❌ ${name}, your grade is F — Failed`;
        result.style.background = "#b91c1c";
    }
}