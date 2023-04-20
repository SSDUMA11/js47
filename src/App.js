import React, {useState} from "react";

function App () {

const [name, setName] = useState('');
const [login, setLogin] = useState('');
const [age, setAge] = useState('');
const [email, setEmail] = useState('');

//////////////

const [isNameValid, setIsNameValid] = useState(false);
const [isLoginValid, setIsLoginValid] = useState(false);
const [isAgeValid, setIsAgeValid] = useState(false);
const [isEmailValid, setIsEmailValid] = useState(false);

///////////////////////

const [wasNameTouched, setWasNameTouched] = useState(false);
const [wasLoginTouched, setWasLoginTouched] = useState(false);
const [wasAgeTouched, setWasAgeTouched] = useState(false);
const [wasEmailTouched, setWasEmailTouched] = useState(false);

///////////////////////////

const nameChange = e => {
  setName(e.target.value);
  setWasNameTouched(true);
  if (e.target.value.length > 1 && !/\d/.test(e.target.value)) {
    setIsNameValid(true);
  } else {
    setIsNameValid(false);
  }
};

const loginChange = e => {
  setLogin(e.target.value);
  setWasLoginTouched(true);
  if (e.target.value.length > 5) {
    setIsLoginValid(true);
  } else {
    setIsLoginValid(false);
  }
};


const ageChange = e => {
  setAge(e.target.value);
  setWasAgeTouched(true);
  if (e.target.value >= 18 ) {
    setIsAgeValid(true);
  } else {
    setIsAgeValid(false);
  }
};

const emailChange = e => {
  setEmail(e.target.value);
  setWasEmailTouched(true);
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  if (regex.test(e.target.value)) {
    setIsEmailValid(true);
  } else {
    setIsEmailValid(false);
  }
};

/////////////////////////

const submit = (e) => {
  e.preventDefault();
  setWasNameTouched(true);
  setWasEmailTouched(true);
  if (name.length > 1 && !/\d/.test(name)) {
    setIsNameValid(true);
  } else {
    setIsNameValid(false);
  }

  if (login.length > 5) {
    setIsLoginValid(true);
  } else {
    setIsLoginValid(false);
  }

  if (age >= 5) {
    setIsAgeValid(true);
  } else {
    setIsAgeValid(false);
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (regex.test(email)) {
    setIsEmailValid(true);
  } else {
    setIsEmailValid(false);
  }
  console.log(name, login, age, email);
}
//////////////////////////
return (
    <div className="wrapper">
      <form onSubmit={submit}>
        <label>Name</label>
        <input onChange={nameChange}  className={!isNameValid && wasNameTouched ? "invalid" : ""} />
        {!isNameValid && wasNameTouched && <p>Enter correct name</p>}

        <label>Login</label>
        <input onChange={loginChange}  className={!isLoginValid && wasLoginTouched ? "invalid" : ""}/>
        {!isLoginValid && wasLoginTouched && <p>Enter correct login</p>}

        <label>Age</label>
        <input type="number"  onChange={ageChange} className={!isAgeValid && wasAgeTouched ? "invalid" : ""}/>
        {!isAgeValid && wasAgeTouched && <p>Enter correct age</p>}

        <label>Email</label>
        <input onChange={emailChange} className={!isEmailValid && wasEmailTouched ? "invalid" : ""} />
        {!isEmailValid && wasEmailTouched && <p>Enter correct email</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
);
} 
export default App;