const baseUrl = "https://olive-bead-glazer.glitch.me";
const tableBody = document.getElementById("autoList");

const getAutoData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  console.log(data);
  displayDataInTable(data);
};

getAutoData();

const displayDataInTable = (autoArray) => {
  autoArray.forEach((auto) => {
    const tr = document.createElement("tr");
    const brandTd = document.createElement("td");
    brandTd.innerHTML = auto.brand;
    const modelTd = document.createElement("td");
    modelTd.innerHTML = auto.model;

    tr.append(brandTd, modelTd);
    tableBody.append(tr);
  });
};
