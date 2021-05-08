const form: HTMLFormElement | null = document.querySelector("form");
const signinButton: HTMLButtonElement | null = document.querySelector("#signinButton");
const emailInput: HTMLInputElement | null = document.querySelector("#email");
const passwordInput: HTMLInputElement | null = document.querySelector("#password");

function signin(): void {
  if (signinButton) {
    const parent = signinButton.parentElement;
    const loadingWrapper = document.createElement("div");
    loadingWrapper.className = "spinner-border spinner-border-sm text-primary ml-2 mt-2";
    loadingWrapper.setAttribute("role", "loading");
    const loadingSpinner = document.createElement("span");
    loadingSpinner.className = "sr-only";
    loadingSpinner.innerHTML = "Loading...";
    loadingWrapper.appendChild(loadingSpinner);
    parent?.appendChild(loadingWrapper);

    const xhttp = new XMLHttpRequest();

    // Cleaning up loading animation
    xhttp.onloadend = function () {
      parent?.removeChild(loadingWrapper);
    };

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = xhttp.response;

        console.log(response);
      }
    };

    xhttp.responseType = "json";
    xhttp.open("POST", "/signin");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
      data: {
        email: emailInput?.value,
        password: passwordInput?.value
      }
    }));
  }
}

if (signinButton)
  signinButton.onclick = signin;

document.addEventListener("keypress", function (e) {
  if (e.key === "enter") {
    signin();
  }
});
