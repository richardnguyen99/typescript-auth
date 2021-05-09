const signupButton: HTMLButtonElement | null = document.querySelector("#signupButton");
const usernameInput: HTMLInputElement | null = document.querySelector("#username");
const emailInput: HTMLInputElement | null = document.querySelector("#email");
const passwordInput: HTMLInputElement | null = document.querySelector("#password");

const signup = (): void => {
  const parent = signupButton?.parentElement;
  const loadingWrapper = document.createElement("div");
  loadingWrapper.className = "spinner-border spinner-border-sm text-primary ml-2 mt-2";
  loadingWrapper.setAttribute("role", "loading");
  const loadingSpinner = document.createElement("span");
  loadingSpinner.className = "sr-only";
  loadingSpinner.innerHTML = "Loading...";
  loadingWrapper.appendChild(loadingSpinner);

  // prevent adding too many loading when submitting too fast
  if (parent?.childNodes.length === 1) {
    parent?.appendChild(loadingWrapper);
  }

  const xhttp = new XMLHttpRequest();

  // Cleaning up loading animation
  xhttp.onloadend = function () {
    if (parent?.childNodes.length === 2)
      parent?.removeChild(loadingWrapper);
  };

  xhttp.onloadstart = function () {
    document.querySelectorAll(".invalid-feedback").forEach(el => el.remove());
    document.querySelector(".alert")?.remove();
  };

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = xhttp.response;
    }

    if (this.readyState == 4 && this.status == 400) {
      const response = xhttp.response;

      const dangerAlert = document.createElement("div");
      dangerAlert.className = "alert alert-danger mt-2";
      dangerAlert.setAttribute("role", "alert");
      dangerAlert.innerHTML = response.msg;
      document.querySelector(".form-center")?.appendChild(dangerAlert);

      Object.keys(response.errors).forEach(error => {
        const invalidFeedbackElement = document.createElement("div");
        invalidFeedbackElement.className = "d-block invalid-feedback";
        invalidFeedbackElement.id = error;
        invalidFeedbackElement.innerHTML = response.errors[error];
        const parentNode = document.querySelector(`#${error}`)?.parentElement;


        if (!parentNode?.querySelector(`div#${error}`)) {
          document.querySelector(`#${error}`)?.parentNode?.appendChild(invalidFeedbackElement);
        }
      });
    }
  };

  xhttp.responseType = "json";
  xhttp.open("POST", "/signup");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    username: usernameInput?.value,
    email: emailInput?.value,
    password: passwordInput?.value
  }));
};

if (signupButton)
  signupButton.onclick = signup;

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    signup();
  }
});
