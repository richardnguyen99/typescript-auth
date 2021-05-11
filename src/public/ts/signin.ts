const form: HTMLFormElement | null = document.querySelector("form");
const signinButton: HTMLButtonElement | null = document.querySelector("#signinButton");
const emailInput: HTMLInputElement | null = document.querySelector("#email");
const passwordInput: HTMLInputElement | null = document.querySelector("#password");

const signin = (): void => {
  if (signinButton) {
    const parent = signinButton.parentElement;
    const loadingWrapper = document.createElement("div");
    loadingWrapper.className = "spinner-border spinner-border-sm text-primary ml-2 mt-2";
    loadingWrapper.setAttribute("role", "loading");
    const loadingSpinner = document.createElement("span");
    loadingSpinner.className = "sr-only";
    loadingSpinner.innerHTML = "Loading...";
    loadingWrapper.appendChild(loadingSpinner);

    // prevent adding too many loading when submitting too fast
    if (parent?.childNodes.length === 2) {
      parent?.appendChild(loadingWrapper);
    }

    const xhttp = new XMLHttpRequest();

    // Cleaning up loading animation
    xhttp.onloadend = function () {
      if (parent?.childNodes.length === 3)
        parent?.removeChild(loadingWrapper);
    };

    xhttp.onloadstart = function () {
      document.querySelectorAll(".invalid-feedback").forEach(el => el.remove());
      document.querySelector(".alert")?.remove();
    };

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = xhttp.response;

        const successAlert = document.createElement("div");
        successAlert.className = "alert alert-success mt-3";
        successAlert.setAttribute("role", "alert");
        successAlert.innerHTML = "Redirect to home page in 3";
        document.querySelector(".form-center")?.appendChild(successAlert);

        let timeLeft = 2;
        const redirecTimer = setInterval(function () {
          if (timeLeft <= 0) {
            clearInterval(redirecTimer);
            successAlert.innerHTML = "Redirecting ...";
            setTimeout(() => {
              window.location.pathname = "/";
            });
          } else {
            successAlert.innerHTML = "Redirect to home page in " + timeLeft;
          }
          timeLeft -= 1;
        }, 1000);
      }

      if (this.readyState == 4 && this.status == 401) {
        const response = xhttp.response;

        const dangerAlert = document.createElement("div");
        dangerAlert.className = "alert alert-danger mt-2";
        dangerAlert.innerHTML = response.message;
        document.querySelector(".form-center")?.appendChild(dangerAlert);
      }
    };

    xhttp.responseType = "json";
    xhttp.open("POST", "/signin");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
      email: emailInput?.value,
      password: passwordInput?.value
    }));
  }
};

if (signinButton)
  signinButton.onclick = signin;

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    signin();
  }
});
