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


const RentPolicy =['policyDate','newPolicy','defaultPolicy','active','notes','contractExtensionPolicyByPhone','accidentsReportingPolicyByPhone','faultReporingPolicyByPhone','faultReporingPolicy','numberOfDaysToExtendBeforeContractEndDate','fuelReturnPolicy','contractExtensionPolicy','accidentsAndFaultReportingPolicy' , 'earlyReturnPolicy' , 'shortName' , "id"]


populateTable("files/rent-policy.json", "#Rent-Policy", RentPolicy);

