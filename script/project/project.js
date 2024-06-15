var dataJson = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    title: "HealthConnect -- AI",
    paragraph: "Personalized Doctors Recommendation Bot",
    url: "#",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    title: "",
    paragraph: "Quizec : is The Quiz Game For Android.",
    url: "https://play.google.com/store/apps/details?id=in.sohezsoft.quiz.app",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    title: "Tic-Tac-Toe",
    paragraph: "Tic-Tac-Toe : Js/HTML/CSS tic tac toe Game. ",
    url: "https://muhammad-shah.github.io/tic-tac-toe/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/2156/2156009.png",
    title: "M.P.C",
    paragraph: "Marks Percentage Calculator : Download Result.",
    url: "https://muhammad-shah.github.io/Marks-Percentage-Calculator/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/2190/2190654.png",
    title: "Smart Suvichar",
    paragraph: "Smart Suvichar: Open Source java Aplication",
    url: "https://github.com/sohez/smart-vichar",
  },
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content;">
    <div
      style="padding: 12px"
      class="project progress mb-5 align-items-center">
      <img
        class="img-fluid"
        style="height: 90px; width: 90px"
        src="${item.img}"
        alt="${item.title}"
        height="100px"
        width="120px"
      />
      <div class="mt-3 ms-3 row">
        <h2 style="color: txt-color">${item.title}</h2>
        <p style="color: txt-color; font-size: medium">
        ${item.paragraph}
        </p>
        <a
          rel="noopener"
          href="${item.url}"
          target="_blank"
          title="${item.title}">
          <button type="button" class="btn btn-secondary">
            View
          </button></a>
      </div>
    </div>
    </div>`;
});
document.getElementById("project-container").innerHTML = raw_html;
