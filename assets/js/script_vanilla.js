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

const alertBtns = document.querySelectorAll(".alert-btns");
alertBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const status = this.getAttribute("data-status");
    initAlert(status);

    clearAndRestartInterval();
  });
});

initAlert("default");
startAlertInterval();
