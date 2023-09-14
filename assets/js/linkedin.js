function getLinkedInExperiences() {
  // Get the access token for your LinkedIn account.
  var accessToken = localStorage.getItem("linkedinAccessToken");

  // Create a request to the LinkedIn API.
  var request = new XMLHttpRequest();
  request.open("GET", "https://api.linkedin.com/v2/me/experiences?access_token=" + accessToken);
  request.onload = function() {
    // Get the response from the API.
    var response = JSON.parse(request.responseText);

    // Create an HTML list to store the experiences.
    var experiencesList = document.createElement("ul");

    // Loop through the experiences and add them to the list.
    for (var i = 0; i < response.length; i++) {
      var experience = response[i];

      var liElement = document.createElement("li");
      liElement.innerHTML = experience.companyName + ", " + experience.title + " (" + experience.startDate + " - " + experience.endDate + ")";

      experiencesList.appendChild(liElement);
    }

    // Add the experiences list to the DOM.
    document.getElementById("experiences").appendChild(experiencesList);
  };

  request.send();
}
