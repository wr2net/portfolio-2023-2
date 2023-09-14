function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status === 200) {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}
readTextFile('data/experiences.json', function(base) {
  const access = JSON.parse(base);
  let information = ""

  access.forEach(function(info, i) {
    info[i].forEach(function(sub, j) {
      information +=
        "<div class='box-info'>" +
        "  <h3><ion-icon name='desktop-outline'></ion-icon>&nbsp;&nbsp;&nbsp;" + sub.occupation + "</h3>" +
        "  <div class='box-subtitle'><ion-icon name='briefcase-outline'></ion-icon> " + sub.enterprise + "</div>" +
        "  <div class='box-date'>" + sub.date_in + " - " + sub.date_out + "</div>" +
        "  <div id='skills'>"
           for (let i = 0; i < sub.skills.length; i++) {
            information += "<div class='skills-box e'><span class='skills-span'>" + sub.skills[i] + "</span></div>"
          }
        information += "</div></div>"
    });
  });
  document.getElementById("experiences-list").innerHTML = information;
});
