let jsonData = `
{
    "name": "kalpesh",
    "age": 27,
    "is_student": true,
    "pass_no": null,
    "p_lang": ["c", "c++", "java", "python"],
    "address": {
      "city": "surat",
      "state": "gujarat",
      "pincode": 395008
    }
  }`;

let JsonObect = JSON.parse(jsonData);

console.log(JsonObect["p_lang"][2]);
console.log(JsonObect["address"]["pincode"]);
