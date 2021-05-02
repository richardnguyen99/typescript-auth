const signupButton: HTMLButtonElement | null = document.querySelector("#signupButton");
const usernameInput: HTMLInputElement | null = document.querySelector("#username");
const emailInput: HTMLInputElement | null = document.querySelector("#email");
const passwordInput: HTMLInputElement | null = document.querySelector("#password");

const signup = (): void => {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = xhttp.response;
      console.log(response);
    }
  };

  xhttp.responseType = "json";
  xhttp.open("POST", "/signup");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    data: {
      username: usernameInput?.value,
      email: emailInput?.value,
      password: passwordInput?.value
    }
  }));
};

if (signupButton)
  signupButton.onclick = signup;
