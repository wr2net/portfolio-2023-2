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
  let information = "<div id='qualifications-list-box'>"

  access.forEach(function(info, i) {
    info[i].forEach(function(sub, j) {
      information +=
        "<a><div class='box-qualification'>" +
        "  <h3>" + sub.course + "</h3>" +
        "  <div class='box-quali'>" + sub.organization + "</div>" +
        "  <div class='box-quali'>" + sub.emission + "</div>"
        if (sub.link !== "#") {
          information += "<a href='" + sub.link + "'><div class='box-date'>" + sub.link + "</div></a>"
        }
      information += "</div></a>"
    });
  });
  information += "</div>"
  document.getElementById("qualifications-list").innerHTML = information;
});
