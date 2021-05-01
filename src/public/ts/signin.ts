const signinButton: HTMLButtonElement | null = document.querySelector("#signinButton");
const emailInput: HTMLInputElement | null = document.querySelector("#email");
const passwordInput: HTMLInputElement | null = document.querySelector("#password");

function signin(): void {
  if (signinButton) {
    const xhttp = new XMLHttpRequest();

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
