function savetoLocalstorage(event){
  event.preventDefault();

  const Name=event.target.name.value;;
  const Email=event.target.email.value;

  const userInfo = {
         Name,
         Email 
  }

  //localStorage.setItem("userinfo", JSON.stringify(userInfo)); 
  axios.post("https://crudcrud.com/api/78d098b91264456d8a2083fb91c780f6/appointmentData",userInfo)
  .then((response) =>{
    console.log(response);
  })
  .catch((err) => console.log(err))
}

