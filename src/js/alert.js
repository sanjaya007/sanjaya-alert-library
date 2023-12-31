const ALERT = {
  alertTimeout: null,

  alertPositionArray: [
    "topRight",
    "topLeft",
    "topCenter",
    "bottomRight",
    "bottomLeft",
    "bottomCenter",
  ],

  alertDefaultData: {
    icon: "<i class='fa-solid fa-circle-info'></i>",
    message: "This is Sanjaya alert.",
    position: "topRight",
    timeOut: "5000",
  },

  setDefaultObjValidation: function (key, obj) {
    if (!obj[key] || obj[key].trim() === "") {
      return this.alertDefaultData[key];
    }

    if (key === "position") {
      if (this.alertPositionArray.indexOf(obj[key]) >= 0) {
        return obj[key];
      } else {
        return this.alertDefaultData[key];
      }
    }

    if (key === "timeOut") {
      const decimalRegex = /^(?:\d+|\d*\.\d+)$/;

      if (decimalRegex.test(obj[key])) {
        return obj[key] * 1000;
      } else {
        return this.alertDefaultData[key];
      }
    }

    return obj[key];
  },

  setDefault: function (obj) {
    for (const key in this.alertDefaultData) {
      this.alertDefaultData[key] = this.setDefaultObjValidation(key, obj);
    }
  },

  init: function (type, message, positionOrTime = null, time = null) {
    let typeText = type
      ? type.trim() !== ""
        ? type.trim()
        : "black"
      : "black";

    let messageText = message
      ? message.trim() !== ""
        ? message.trim()
        : this.alertDefaultData.message
      : this.alertDefaultData.message;

    let setPositionOrTime = null;
    let position = this.alertDefaultData.position;
    let timeOut = this.alertDefaultData.timeOut;

    const decimalRegex = /^(?:\d+|\d*\.\d+)$/;

    if (positionOrTime) {
      if (decimalRegex.test(positionOrTime)) {
        timeOut = positionOrTime * 1000;
        setPositionOrTime = "time";
      } else {
        if (this.alertPositionArray.indexOf(positionOrTime) >= 0) {
          position = positionOrTime;
        } else {
          console.warn(
            `Invalid third parameter value i.e ('${positionOrTime}')`
          );
          console.warn(
            "Position parameters list (topLeft/topRight/topCenter/bottomRight/bottomLeft/bottomCenter)"
          );
          console.warn(
            "If you want to use only 3 parameters then use proper position/time value !"
          );
          console.warn("Eg1. " + "(success, Hello World !, topRight or 5)");
          console.warn("Eg2. " + "(success, Hello World !, topRight, 5)");
          console.warn(
            "So, I have set default value (topRight) in third parameter !"
          );
        }
        setPositionOrTime = "position";
      }
    }

    if (time) {
      if (setPositionOrTime && setPositionOrTime === "position") {
        if (decimalRegex.test(time)) {
          timeOut = time * 1000;
        } else {
          console.warn(`Invalid fourth parameter value i.e ('${time}')`);
          console.warn(
            "Correct Example: " + "(success, Hello World !, topRight, 5)"
          );
          console.warn(
            "So, I have set default value (5 second) in fourth parameter !"
          );
        }
      }
    }

    switch (typeText.trim()) {
      case "success":
        this.showAlert(
          "success",
          '<i class="fa-solid fa-circle-check"></i>',
          messageText,
          position,
          timeOut
        );
        break;
      case "info":
        this.showAlert(
          "info",
          '<i class="fa-solid fa-circle-info"></i>',
          messageText,
          position,
          timeOut
        );
        break;
      case "warning":
        this.showAlert(
          "warning",
          '<i class="fa-solid fa-circle-exclamation"></i>',
          messageText,
          position,
          timeOut
        );
        break;
      case "error":
        this.showAlert(
          "error",
          '<i class="fa-solid fa-triangle-exclamation"></i>',
          messageText,
          position,
          timeOut
        );
        break;
      case "default":
        this.showAlert(
          "default",
          this.alertDefaultData.icon,
          messageText,
          position,
          timeOut
        );
        break;
      default:
        this.showAlert(
          "black",
          '<i class="fa-solid fa-circle-info"></i>',
          messageText,
          position,
          timeOut
        );
        break;
    }
  },

  showAlert: function (type, icon, message, position, timeOut) {
    const sanjayaAlertBox = document.getElementById("sanjayaAlertBox");
    if (sanjayaAlertBox) {
      sanjayaAlertBox.remove();
    }
    const body = document.querySelector("body");
    body.insertAdjacentHTML(
      "beforeend",
      this.html(`sanjaya-${type}-alert`, icon, message, position)
    );
    this.clickable();
    this.timeout(timeOut);
  },

  html: function (type, icon, message, position) {
    return `<div class="sanjaya-alert-box ${type} ${this.setPositionClass(
      position
    )} sanjaya-show" id="sanjayaAlertBox">
                      <div class="sanjaya-alert-icon">
                      ${icon}
                      </div>
                      <div class="sanjaya-alert-message" id="sanjayaAlertMessage">
                          <p>${message}</p>
                      </div>
                      <div class="sanjaya-alert-close" id="sanjayaAlertClose">
                          <i class="fas fa-times"></i>
                      </div>
                  </div>`;
  },

  setPositionClass: function (position) {
    switch (position) {
      case "topRight":
        return "sanjaya-top-right-alert";
      case "topLeft":
        return "sanjaya-top-left-alert";
      case "topCenter":
        return "sanjaya-top-center-alert";
      case "bottomRight":
        return "sanjaya-bottom-right-alert";
      case "bottomLeft":
        return "sanjaya-bottom-left-alert";
      case "bottomCenter":
        return "sanjaya-bottom-center-alert";
    }
  },

  clickable: function () {
    const sanjayaAlertClose = document.getElementById("sanjayaAlertClose");
    if (sanjayaAlertClose) {
      sanjayaAlertClose.addEventListener("click", function () {
        const sanjayaAlertBox = document.getElementById("sanjayaAlertBox");
        if (sanjayaAlertBox) {
          sanjayaAlertBox.classList.remove("sanjaya-show");
          sanjayaAlertBox.classList.add("sanjaya-hide");
        }
      });
    }
  },

  timeout: function (time) {
    clearTimeout(this.alertTimeout);
    const sanjayaAlertBox = document.getElementById("sanjayaAlertBox");
    if (sanjayaAlertBox) {
      sanjayaAlertBox.classList.remove("sanjaya-hide");
      sanjayaAlertBox.classList.add("sanjaya-show");

      this.alertTimeout = setTimeout(function () {
        if (sanjayaAlertBox) {
          sanjayaAlertBox.classList.remove("sanjaya-show");
          sanjayaAlertBox.classList.add("sanjaya-hide");
        }
      }, time);
    }
  },
};
