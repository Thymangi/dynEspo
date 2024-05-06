document.addEventListener("DOMContentLoaded", function () {
  let commentForm = document.querySelector("form");
  let commentList = document.getElementById("comment-list");
  let errorMessage = document.getElementById("error-message");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let message = document.getElementById("message").value.trim();

    // Vérifier que tous les champs sont remplis
    if (firstName === "" || lastName === "" || message === "") {
      errorMessage.style.display = "block";
      return; // Arrêter l'exécution de la fonction
    }

    // Créer un nouveau commentaire
    let newComment = document.createElement("div");
    newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

    newComment.innerHTML = `
      <div class="flex-1 py-10 border-t border-gray-200">
        <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>${message}</p>
        </div>
      </div>
    `;

    // Ajouter le nouveau commentaire à la liste
    commentList.prepend(newComment);

    // Vider les champs du formulaire
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";

    // Cacher le message d'erreur
    errorMessage.style.display = "none";
  });
});
