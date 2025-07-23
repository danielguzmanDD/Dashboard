document.addEventListener("DOMContentLoaded", () => {
  const kpis = [
    { title: "Worked Cases", value: "245" },
    { title: "TTR (Time To Resolution)", value: "3.4 hrs" },
    { title: "DWR (Did We Resolve)", value: "89%" },
    { title: "R+2 (Repeated Contacts)", value: "7%" },
    { title: "QA (Quality Assurance)", value: "92%" },
    { title: "ADH (Adherence)", value: "95%" }
  ];

  const grid = document.getElementById("kpiGrid");

  kpis.forEach(kpi => {
    const card = document.createElement("div");
    card.className = "kpi-card";

    const title = document.createElement("div");
    title.className = "kpi-title";
    title.textContent = kpi.title;

    const value = document.createElement("div");
    value.className = "kpi-value";
    value.textContent = kpi.value;

    card.appendChild(title);
    card.appendChild(value);
    grid.appendChild(card);
  });
});
