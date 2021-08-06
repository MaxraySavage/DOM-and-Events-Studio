window.addEventListener('load', function() {
    const takeOffBtn = document.getElementById('takeoff');
    takeOffBtn.addEventListener('click', function() {
        const shuttleConfirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (shuttleConfirmation) {
            const flightStatus = document.getElementById('flightStatus');
            flightStatus.innerHTML = 'Shuttle in flight.';
            const shuttleFlightScreen = document.getElementById('shuttleBackground');
            shuttleFlightScreen.style.backgroundColor = 'blue';
            const shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });
});