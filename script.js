const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track Attendance
let count = 0;
const maxCount = 50;


//handle form submission
form.addEventListener("submit", function (e){
    e.preventDefault();
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;
    const greeting = document.getElementById("greeting");

  //Max Count
       if (count >= maxCount) {
        // Find team with highest count
        const waterCount = parseInt(document.getElementById("waterCount").textContent);
        const zeroCount = parseInt(document.getElementById("zeroCount").textContent);
        const powerCount = parseInt(document.getElementById("powerCount").textContent);

        let maxTeam = "Team Water Wise";
        let maxValue = waterCount;

        if (zeroCount > maxValue) {
            maxTeam = "Team Net Zero";
            maxValue = zeroCount;
        }
        if (powerCount > maxValue) {
            maxTeam = "Team Renewables";
            maxValue = powerCount;
        }

        greeting.textContent = `🎉 Maximum attendance reached! Congratulations to ${maxTeam} with ${maxValue} check-ins! 🎉`;
        greeting.style.display = "block";
        return;
        }
    //Increment Count
    count++;

    //update progress bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    const progressFill = document.getElementById("progressBar");
    progressFill.style.width = `${percentage}`;
    
    //update attendee count
    const attendeeCount = document.getElementById("attendeeCount");
    attendeeCount.textContent = count;

    //update team count
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    //show welcome message
    const message = `🎊🎉 Welcome, ${name} from ${teamName} 🎉🎊`;
    greeting.textContent = message;
    greeting.style.display = "block";
  

    form.reset();
});

