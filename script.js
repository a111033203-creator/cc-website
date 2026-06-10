const filters = document.querySelectorAll(".filter");
const petCards = document.querySelectorAll(".pet-card");
const quiz = document.querySelector("#adoptionQuiz");
const quizResult = document.querySelector("#quizResult");

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("navigation_click", {
      link_text: link.textContent.trim(),
      target_section: link.getAttribute("href")
    });
  });
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    petCards.forEach((card) => {
      const shouldShow = type === "all" || card.dataset.type === type;
      card.classList.toggle("is-hidden", !shouldShow);
    });

    trackEvent("pet_filter_click", {
      animal_type: type
    });
  });
});

quiz.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quiz);
  const required = ["time", "budget", "home", "style"];
  const missing = required.some((key) => !formData.get(key));

  if (missing) {
    quizResult.textContent = "請先完成所有題目，才能得到較準確的建議。";
    return;
  }

  const readiness =
    Number(formData.get("time")) +
    Number(formData.get("budget")) +
    Number(formData.get("home"));
  const style = formData.get("style");

  trackEvent("quiz_submit", {
    readiness_score: readiness,
    preferred_style: style
  });

  if (readiness <= 5) {
    quizResult.textContent = "建議先了解更多飼養知識，並確認時間、費用與居住環境後再認養。";
    return;
  }

  if (style === "dog" && readiness >= 8) {
    quizResult.textContent = "你可能適合認養需要互動與散步的狗狗。建議先從個性穩定、活動量中等的毛孩開始了解。";
    return;
  }

  if (style === "cat") {
    quizResult.textContent = "你可能適合認養貓咪。請先準備防逃措施、貓砂盆、抓板與安靜適應空間。";
    return;
  }

  quizResult.textContent = "你已具備初步準備，建議先從中途或收容所諮詢，找出最符合生活型態的毛孩。";
});
