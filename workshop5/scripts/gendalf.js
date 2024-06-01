let cardDiv = document.createElement("div");
cardDiv.id = "card";

let cardTitle = document.createElement("h2");
cardTitle.textContent = "Gandalf";

let cardLink = document.createElement("a");
cardLink.href = "#";
cardLink.textContent = "Go to profile";

cardDiv.appendChild(cardTitle);
cardDiv.appendChild(cardLink);
document.body.appendChild(cardDiv);
