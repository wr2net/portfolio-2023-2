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
readTextFile('data/qualifications.json', function(base) {
  const access = JSON.parse(base);
  let information = ""

  access.forEach(function(info, i) {
    info[i].forEach(function(sub, j) {
      information +=
        "<div class='box-info'>" +
        "  <h3><ion-icon name='desktop-outline'></ion-icon>&nbsp;&nbsp;&nbsp;" + sub.course + "</h3>" +
        "  <div class='box-date'>" + sub.organization + "</div>" +
        "  <div class='box-date'>" + sub.emission + "</div>"
        if (sub.link !== "#") {
          information += "<a href='" + sub.link + "' <div class='box-date'>" + sub.link + "</div></a>"
        }
    });
  });
  document.getElementById("qualifications-list").innerHTML = information;
});
