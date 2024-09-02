function populateTable(jsonFilePath, tableSelector, columnOrder) {
    fetch(jsonFilePath)
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector(tableSelector);

            data.forEach((item) => {
                const row = document.createElement("tr");

                row.innerHTML = columnOrder.map(key => `<td>${item[key] !== null && item[key] !== undefined ? item[key] : "null"}</td>`).join("");

                tableBody.appendChild(row);
            });
        })
        .catch((error) => console.error(`Error loading JSON data from ${jsonFilePath}:`, error));
}


const ExtendedCoverage =["logTime","createdBy", "extendedCoverageDescription","extendedCoverageName", "id"]


populateTable("files/Extended Coverage.json", "#ExtendedCoverage", ExtendedCoverage);

