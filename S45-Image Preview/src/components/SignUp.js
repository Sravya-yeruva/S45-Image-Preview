import React, { useRef, useState } from "react";

function SignUp() {
  let FirstNameInputRef = useRef();
  let LastNameInputRef = useRef();
  let MobileInputRef = useRef();
  let EmailInputRef = useRef();
  let StateInputRef = useRef();
  let [SelectedImageStr, setSelectedImageStr]= useState("./image/default img.jpg");
  return (
    <div>
      <form>
        <h1 className="head">Sign Up</h1>
        <h2 style={{ fontSize: "15px" }}>I'ts quick and easy</h2>
        <hr></hr>

        <div>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter your first name"
            ref={FirstNameInputRef}
          ></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            ref={LastNameInputRef}
          ></input>
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="number"
            placeholder="Enter your mobile no"
            ref={MobileInputRef}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            ref={EmailInputRef}
          ></input>
        </div>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender"></input>
          <label className="gender">Female</label>
          <input type="radio" name="gender"></input>
          <label className="gender">Male</label>
        </div>
        <div>
          <label>States:</label>
          <select
            ref={StateInputRef}
            onChange={(EventObj) => {
              console.log(EventObj.target.value);
              let SelectedStates = EventObj.target.value;
              switch (SelectedStates) {
                case "Andhra Pradesh":
                  console.log("Amaravati");

                  break;
                case "Arunachal Pradesh":
                  console.log("Itanagar");
                  break;
                  case "Assam":
                  console.log("Dispur");
                  break;
                  case "Bihar":
                  console.log("Patna");
                  break;
                  case "Chhattisgarh":
                  console.log("Raipur");
                  break;
                  case "Goa":
                  console.log("Panaji");
                  break;
                  case "Gujarat":
                  console.log("Gandhinagar");
                  break;
                  case "Haryana":
                  console.log("Chandigarh");
                  break;
                  case "Himachal Pradesh":
                  console.log("Shimla");
                  break;
                  case "Jharkhand":
                  console.log("Ranchi");
                  break;
                  case "Karnataka":
                  console.log("Bengaluru");
                  break;
                  case "Kerala":
                  console.log("Thiruvananthapuram");
                  break;
                  case "Madhya Pradesh":
                  console.log("Bhopal");
                  break;
                  case "Maharashtra":
                  console.log("Mumbai");
                  break;
                  case "Manipur":
                  console.log("Imphal");
                  break;
                  case "Meghalaya":
                  console.log("Shillong");
                  break;
                  case "Mizoram":
                  console.log("Aizawl");
                  break;
                  case "Nagaland":
                  console.log("Kohima");
                  break;
                  case "Odisha":
                  console.log("Bhubaneswar");
                  break;
                  case "Punjab":
                  console.log("Chandigarh");
                  break;
                  case "Rajasthan":
                  console.log("Jaipur");
                  break;
                  case "Sikkim":
                  console.log("Gangtok");
                  break;
                  case "Tamil Nadu":
                  console.log("Chennai");
                  break;
                  case "Telangana":
                  console.log("Hyderabad");
                  break;
                  case "Tripura":
                  console.log("Agartala");
                  break;
                  case "Uttar Pradesh":
                  console.log("Lucknow");
                  break;
                  case "UttarKhand":
                  console.log("Dehradun");
                  break;
                  
                  


                default:
                  break;
              }
            }}
          >
            <option style={{ fontSize: "20px" }}>Select States</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarkhand</option>
            <option>West Bengal</option>
          </select>
        </div>
        <div>
            <label style={{width:'60px'}}>Files:</label>
            <input type='file' onChange={(EventObj)=>{
                console.log(EventObj.target.files);
                let SelectedImageStr=URL.createObjectURL(EventObj.target.files[0]);
                console.log(SelectedImageStr);
                setSelectedImageStr(SelectedImageStr);

            }}></input>
        </div>
        <div>
            <img className="img" src={SelectedImageStr}></img>
        </div>
        <div>
          <button
            onClick={() => {
              let FirstName = FirstNameInputRef.current.value;
              let LastName = LastNameInputRef.current.value;
              let Mobile = Number(MobileInputRef.current.value);
              let Email = EmailInputRef.current.value;
              let State = StateInputRef.current.value;
              alert(
                `${FirstName} ${LastName} From ${State} with Mobile no ${Mobile} and Email ${Email}`
              );
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
