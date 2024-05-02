// Initialize an empty array to store attendees
const attendees = [];

function addAttendee() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const specialization = document.getElementById('specialization').value;

    // Add attendee to the array
    attendees.push({ name, gender, specialization });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('specialization').value = '';

    // Update the list of selected attendees
    updateAttendeesList();
}

function updateAttendeesList() {
    const selectedAttendeesList = document.getElementById('selected-attendees');
    selectedAttendeesList.innerHTML = '';

    // Randomly select 20 attendees
    const shuffledAttendees = shuffleArray(attendees);
    const selected = shuffledAttendees.slice(0, 20);

    selected.forEach((attendee) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${attendee.name} (${attendee.gender}) - ${attendee.specialization}`;
        selectedAttendeesList.appendChild(listItem);
    });
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
