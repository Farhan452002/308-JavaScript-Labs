let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csvData.split("\n");
let columns = rows[0].split(",").length;
console.log("Number of rows: "+rows.length);
console.log("Number of columns: "+columns);