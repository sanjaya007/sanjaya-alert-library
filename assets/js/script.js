let alertInterval;

function initAlert(status) {
  ALERT.init(`${status}`, "This is Sanjaya alert.");
}

function startAlertInterval() {
  alertInterval = setInterval(function () {
    initAlert("default");
  }, 8000);
}

function clearAndRestartInterval() {
  clearInterval(alertInterval);
  startAlertInterval();
}

$(".alert-btns").on("click", function () {
  const status = $(this).attr("data-status");
  initAlert(status);

  clearAndRestartInterval();
});

// Start the interval initially
initAlert("default"); // Initial alert
startAlertInterval(); // Start subsequent alerts interval
