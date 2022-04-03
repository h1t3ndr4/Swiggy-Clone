

// const [userCredentials, setUserCredentials] = useState({});

// const handleChange = (e) => {
//   const {id, value} = e.target.value;
//   setUserCredentials({
//     ...userCredentials,
//     [id] : value
//   })
// }

//   const handleSubmit = () => {
//      if(userCredentials.email || userCredentials.phone_num || userCredentials.password || userCredentials.username === ""){
//        alert("Please fill all the credentials");
//      }
//      else{
//        fetch("https://server-swiggy.herokuapp.com/users/", {
//          method: 'POST',
//          body: JSON.stringify(userCredentials),
//          headers: {
//            "content-type" : "application/json"
//          }
//        }).then(alert("Signedup successfully"));
//      }
//   }