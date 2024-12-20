const pollForm = document.getElementById("pollForm");
const submitVote = document.getElementById("submitVote");
const resultsDiv = document.getElementById("results");
const resultList = document.getElementById("resultList");

let pollResults = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    "C++": 0,
};

submitVote.addEventListener("click", () => {
    const selectedOption = pollForm.vote.value;
    if (!selectedOption) {
        alert("Please select an option before submitting.");
        return;
    }

    // Update poll results
    pollResults[selectedOption] += 1;

    // Show results
    displayResults();
});

function displayResults() {
    resultsDiv.classList.remove("hidden");
    resultList.innerHTML = "";

    for (const [language, votes] of Object.entries(pollResults)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${language}: ${votes} votes`;
        resultList.appendChild(listItem);
    }
}
