var dataJson = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/11066/11066847.png",
    title: "HealthConnect -- AI",
    paragraph: "Personalized Doctors Recommendation Bot",
    url: "https://healthconnect-ai.streamlit.app/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/16864/16864339.png",
    title: "FAQ -Bot",
    paragraph: "FAQ Bot: Virtual Assistant Web App for ecommerce",
    url: "https://faq-assistant.vercel.app/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2593/2593627.png",
    title: "FAQ -Bot",
    paragraph: "FAQ Bot: Online Customer Support Service Bot",
    url: "https://faq--bot.streamlit.app/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/708/708881.png",
    title: "Story Generation",
    paragraph: "Story Generation: AI powered Story Generator Web App",
    url: "https://story-generation.vercel.app/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/16210/16210722.png",
    title: "Sentiment Analysis",
    paragraph:
      "Sentiment Analysis: Fine-Tuned Tiny-Bert Model for Sentiment Analysis",
    url: "https://reviews-sentiment-analysis.streamlit.app/",
  },

  {
    img: "https://cdn-icons-png.flaticon.com/512/15646/15646725.png",
    title: "Imagine",
    paragraph: "Imagine: Open Source AI Image Generator",
    url: "https://imagineai.streamlit.app/",
  },

  {
    img: "https://cdn-icons-png.flaticon.com/128/2190/2190654.png",
    title: "Smart Suvichar",
    paragraph: "Smart Suvichar: Open Source java Aplication",
    url: "#",
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
