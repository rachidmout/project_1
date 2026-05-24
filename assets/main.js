const renderParticipants = () => {
  if (typeof participants !== "undefined") {
    const template = document.getElementById("template").innerHTML;
    const rendered = Mustache.render(template, {
      participants: participants,
    });
    document.querySelector("ul").innerHTML = rendered;
  }
};

const ajouterParticipant = (addParticipant = (event) => {
  event.preventDefault();
  if (typeof participants !== "undefined") {
    const nom = document.getElementById("nom").value;
    const avatar = document.getElementById("choix").value;
    participants.push({ nom: nom, avatar: avatar });
    renderParticipants();
    document.getElementById("nom").value = "";
  } else {
    alert("La liste des participants est introuvable");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  renderParticipants();
});
