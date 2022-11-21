numberOfCandidates = prompt("How many candidates")
arrayOfCandidates = []
for (let i=0; i < numberOfCandidates; i++) {
    candidateName = prompt(`Name for candidate ${i+1}`).toLowerCase();
    candidate = {
        name: candidateName,
        votes: 0,
    }
    arrayOfCandidates.push(candidate);
}

//console.log(arrayOfCandidates);

numberOfVoters = prompt("How many voters")
for (let j=0; j < numberOfVoters; j++) {
    vote = prompt("Enter the candidate name you wish to vote for").toLowerCase();
    arrayOfCandidates.forEach(candidate => {
        if (vote == candidate.name) {
           candidate.votes += 1;
           //console.log(`Voted for ${candidate.name}`);
        }
    });
}
//console.log(arrayOfCandidates);

// Invert the array
arrayOfCandidates.sort((a, b) => {
    //console.log(a, b);
    return b - a;
 });

console.log(`The winner is ${arrayOfCandidates[0].name} with ${arrayOfCandidates[0].votes} votes.`);
console.log(`Results:`);
for (let a=0; a < arrayOfCandidates.length; a++) {
    console.log(`${arrayOfCandidates[a].name}: ${arrayOfCandidates[a].votes} votes`);
}