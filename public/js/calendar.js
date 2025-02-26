// Fetch and format appointments
async function fetchAppointments() {
  try {
    const response = await fetch("http://localhost:8000/rendez-vous/appointments");
    if (response.ok) {
      const appointments = await response.json();

      // Modify appointments to remove _id and format the date
      const formattedAppointments = appointments.map((appointment) => {
        const { _id, ...appointmentWithoutId } = appointment;
        const dateWithoutTime = new Date(appointment.date).toLocaleDateString();
        return {
          ...appointmentWithoutId,
          date: dateWithoutTime,
        };
      });

      console.log(formattedAppointments); // Log formatted appointments

      return formattedAppointments;
    } else {
      console.log("Error: Server responded with an error.");
      return [];
    }
  } catch (error) {
    console.error("Error during the fetch request:", error);
    return [];
  }
}

// Initialize and render calendar
let currentMonth = document.querySelector(".current-month");
let calendarDays = document.querySelector(".calendar-days");
let today = new Date();
let date = new Date();
let selectedDate = null;
let selectedTextH = null;
let appointments = [];

currentMonth.textContent = date.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});
today.setHours(0, 0, 0, 0);

async function renderCalendar() {
  // Fetch appointments if not already fetched
  if (appointments.length === 0) {
    appointments = await fetchAppointments();
  }

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const totalMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startWeekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  calendarDays.innerHTML = "";
  let totalCalendarDay = 6 * 7;

  for (let i = 0; i < totalCalendarDay; i++) {
    let day = i - startWeekDay + 1;
    let dayElement;

    if (i < startWeekDay) {
      dayElement = `<div class="prev-month-day">${prevLastDay - startWeekDay + i + 1}</div>`;
    } else if (day <= totalMonthDay) {
      let thisDate = new Date(date.getFullYear(), date.getMonth(), day);
      thisDate.setHours(0, 0, 0, 0);

      let dayClass = "month-day";
      if (thisDate.getTime() === today.getTime()) {
        dayClass = "current-day";
      } else if (thisDate.getTime() < today.getTime()) {
        dayClass = "prev-month-day";
      }
      if (selectedDate && thisDate.getTime() === selectedDate.getTime()) {
        dayClass = "selected-day";
      }

      // Check if all time slots for this date are taken
      let formattedDate = thisDate.toLocaleDateString();
      let takenSlots = appointments.filter(appt => appt.date === formattedDate).map(appt => appt.timeSlot);
      let allSlotsTaken = takenSlots.length >= 7; // There are 7 time slots from 9:00 to 15:00

      if (allSlotsTaken) {
        dayClass = "prev-month-day";
      }

      dayElement = `<div class="${dayClass}" data-date="${thisDate.toISOString()}">${day}</div>`;
    } else {
      dayElement = `<div class="next-month-day">${day - totalMonthDay}</div>`;
    }

    calendarDays.innerHTML += dayElement;
  }

  document.querySelectorAll(".month-day, .current-day").forEach(function (element) {
    element.addEventListener("click", function () {
      selectedDate = new Date(element.getAttribute("data-date"));
      renderCalendar();
      renderTimeSlots();
    });
  });
}

// Month navigation
document.querySelectorAll(".month-btn").forEach(function (element) {
  element.addEventListener("click", function () {
    date = new Date(currentMonth.textContent);
    date.setMonth(date.getMonth() + (element.classList.contains("prev") ? -1 : 1));
    currentMonth.textContent = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    renderCalendar();
  });
});

// Year navigation and today button
document.querySelectorAll(".btnC").forEach(function (element) {
  element.addEventListener("click", function () {
    let btnClass = element.classList;
    date = new Date(currentMonth.textContent);
    if (btnClass.contains("today")) {
      date = new Date();
    } else if (btnClass.contains("prev-year")) {
      date = new Date(date.getFullYear() - 1, date.getMonth(), 1);
    } else {
      date = new Date(date.getFullYear() + 1, date.getMonth(), 1);
    }

    currentMonth.textContent = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    renderCalendar();
  });
});

function renderTimeSlots() {
  const timeSlotsContainer = document.querySelector(".heures-disponibles");
  timeSlotsContainer.innerHTML = ""; // Clear existing buttons

  if (!selectedDate) {
    return;
  }

  const startHour = 9;
  const endHour = 15;
  const formattedDate = selectedDate.toLocaleDateString();
  const takenSlots = appointments.filter(appt => appt.date === formattedDate).map(appt => appt.timeSlot);

  for (let hour = startHour; hour <= endHour; hour++) {
    const timeSlotStr = `${hour < 10 ? '0' + hour : hour}:00`;
    
    // Skip rendering if time slot is already taken
    if (takenSlots.includes(timeSlotStr)) {
      continue;
    }

    const timeSlot = document.createElement("button");
    timeSlot.classList.add("heure-btn");
    timeSlot.innerText = timeSlotStr;

    // Add event listener to select the time slot
    timeSlot.addEventListener("click", () => {
      document.querySelectorAll(".heure-btn").forEach((btn) => btn.classList.remove("selected"));
      timeSlot.classList.add("selected");
      selectedTextH = timeSlot.innerText;
    });

    timeSlotsContainer.appendChild(timeSlot);
  }
}

function calendarSave() {
  if (selectedTextH && selectedDate) {
    localStorage.setItem("timeSlot", selectedTextH);
    console.log(selectedTextH);
    localStorage.setItem("date", selectedDate.toLocaleDateString("en-US"));
    if (localStorage.getItem("date") != null && localStorage.getItem("timeSlot") != null) {
      window.location.href = "/rendez-vous/info";
    }
  } else {
    alert("Please select both date and time.");
  }
}

document.getElementById("btn2").addEventListener("click", calendarSave);

renderCalendar();
renderTimeSlots();
