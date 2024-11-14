// RLab Part 2:
console.log("RLab Part 2:");
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csvData.split("\n");
let columns = rows[0].split(",").length;
console.log(csvData);
console.log("Number of rows: "+rows.length);
console.log("Number of columns: "+columns);
let data = [];

for(let i = 0;i<rows.length;i++){
    data[i] = rows[i].split(",");
}
console.log(data);

// RLab Part 3:
console.log("RLab Part 3:");
let csvRows = []; // Array of objects

for(let i=1;i<rows.length;i++){
    let csvObj = {};
    for(let j=0;j<columns;j++){
        switch(j){
            case 0:
                csvObj.id = data[i][j];
                break;
            case 1:
                csvObj.name = data[i][j];
                break;
            case 2:
                csvObj.occupation = data[i][j];
                break;
            case 3:
                csvObj.age = data[i][j];
                break;                   
        }
        
    }
    csvRows.push(csvObj);
}
console.log(csvRows);