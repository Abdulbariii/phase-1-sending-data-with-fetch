// Add your code here
const body = document.querySelector("body");
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((res) => res.json())
    .then((data) => (document.body.innerHTML = data["id"]))
    .catch((err) => {
      const error = document.createElement("div");
      error.innerHTML = "Unauthorized Access";
      body.append(error);
    });
}
