  /* intro page */

  function introPage(){
    let myId = document.getElementById("ID").value.trim();
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const correctPassword = month + day + year;

    myId = isNaN(myId) ? 0 : myId;
    if (myId === correctPassword){
      alert("Login successful!");
      window.location.href = "heropage.html";
    }else {
      alert("Incorrect password. Use today's date as MMDDYYYY.");
      document.getElementById("ID").value = "";
    }
  }

function noteAverage() {
    let firstName = document.getElementById('first').value.trim();
    let fgs = parseInt(document.getElementById('fg').value.trim());
    let sgs = parseInt(document.getElementById('sg').value.trim());
    let tgs = parseInt(document.getElementById('tg').value.trim());
    let explain = document.getElementById("expl");
  
    // Validate inputs
    fgs = isNaN(fgs) ? 0 : fgs;
    sgs = isNaN(sgs) ? 0 : sgs;
    tgs = isNaN(tgs) ? 0 : tgs;
  
    // Calculate average
    let average = ((fgs + sgs + tgs) / 3).toFixed(2);
    let resultColor = average < 10 ? "red" : "green";
  
    // Display average
    let results = document.getElementById('result');
    results.value = average;
  
    // Provide feedback
    explain.textContent = average < 10
      ? `${firstName}, 😞 you fail 😞`
      : `🎉 Congratulations!! Great Job, ${firstName} 🎉`;
    explain.style.color = resultColor;
  
    // Retrieve stored list
    let studentList = JSON.parse(localStorage.getItem("students")) || [];
  
    // Add new student with color feedback
    studentList.push({ name: firstName, average, color: resultColor });
  
    // Auto-clear if list reaches 10 entries
    /*if (studentList.length > 10) {
      studentList = [];
      alert("List reached 10 students! Resetting...");
    }*/
  
    // Save updated list
    localStorage.setItem("students", JSON.stringify(studentList));
  
    // Refresh displayed list
    displayStudentList();
  
    // Clear input fields
    document.getElementById('first').value = "";
    document.getElementById('fg').value = "";
    document.getElementById('sg').value = "";
    document.getElementById('tg').value = "";
  }
  
  // Function to display students with colors
  function displayStudentList() {
    let fullList = document.getElementById("fulllist");
    fullList.innerHTML = ""; // Clear list before adding updated data
  
    let studentList = JSON.parse(localStorage.getItem("students")) || [];
  
    studentList.forEach((student, index) => {
      let newEntry = document.createElement("li");
      newEntry.textContent = `${student.name}: ${student.average}`;
      newEntry.style.color = student.color; // Set color based on average
      fullList.appendChild(newEntry);
    });
  }
  
  // Manual Reset Function
  function clearList() {
    localStorage.removeItem("students"); // Remove stored data
    document.getElementById("fulllist").innerHTML = ""; // Clear list display
    alert("List cleared!");
  }

  // log out 
  function logOut(){
    window.location.href = "index.html";
  }
  
  // Load list when page loads
  window.onload = displayStudentList;
  




  
  
