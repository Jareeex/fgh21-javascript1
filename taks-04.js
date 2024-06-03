let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};


const newData = {
  ...data,
  name: "Fajar Baswara",
  email: "baswarafajar@gmail.com",
  hobby: "bermain game",
  address :{
    street: "Jalan Wibawa Mukti 2 no,115",
    city: "Bekasi",
    zipcode:"17422"
  }
};


const { street, city } = newData.address;

;
console.log("Street:", street);
console.log("City:", city);