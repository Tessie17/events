async function addAttendee(name, gender, specialization) {
  try {
    const data = { name, gender, specialization };

    const response = await fetch("/api/attendee/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add attendee");
    }

    document.getElementById("name").value = "";
    document.getElementById("specialization").value = "";

    updateAttendeesList();
  } catch (error) {
    console.error("Error adding attendee:", error);
  }
}

async function updateAttendeesList() {
  const selectedAttendeesList = document.getElementById("selected-attendees");
  selectedAttendeesList.innerHTML = "";

  const response = await fetch("/api/attendee/getAllAttendees");
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    return;
  }

  const attendees = await response.json();
  let selected = attendees;
  if (attendees.length >= 100) {
    const shuffledAttendees = shuffleArray(attendees);
    selected = shuffledAttendees.slice(0, 20);
  }

  selected.forEach((attendee) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${attendee.name} (${attendee.gender}) - ${attendee.specialization}`;
    selectedAttendeesList.appendChild(listItem);
  });
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
