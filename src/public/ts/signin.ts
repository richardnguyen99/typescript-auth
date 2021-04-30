const signinButton: HTMLButtonElement | null = document.querySelector("#signinButton");

function signin(): void {
  if (signinButton) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = xhttp.response;
      }
    };

    xhttp.responseType = "json";
    xhttp.open("POST", "/signin");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ msg: "test" }));
  }
}

if (signinButton)
  signinButton.onclick = signin;
