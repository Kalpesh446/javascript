let Obj = {
  name: "kalpesh",
  age: 27,
  is_student: true,
  pass_no: null,
  p_lang: ["c", "c++", "java", "python"],
  address: {
    city: "surat",
    state: "gujarat",
    pincode: 395008,
  },
};

// when data send in server in json stringify
let jsonString = JSON.stringify(Obj);
console.log(jsonString);
