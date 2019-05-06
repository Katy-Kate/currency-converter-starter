export const getUsersFromLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
};
export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user || {};
};
export const loginUser = async (userPas, userMail) => {
  const users = await JSON.parse(localStorage.getItem("users"));
  return await foundUser(users, userPas, userMail);
};

export const addNewUserToLocalStorage = user => {
  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    localStorage.setItem("users", JSON.stringify([user]));
  }
};

export const validateFuield = (context, inputName) => {
  if (context.state.values[inputName] === "") {
    inputErrors(context, inputName, "Not empty");
    return false;
  } else {
    // changing email input
    if (inputName === "email") {
      const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
      let emailErr = "";
      if (context.state.values[inputName].length <= 4) {
        emailErr = "Must be more then 4 charecters";
      } else if (!regExpMail.test(context.state.values.email)) {
        emailErr = "Invalid email address";
      }
      inputErrors(context, inputName, emailErr);
      return false;
    }

    // changing mobile input
    else if (inputName === "mobile") {
      const regExpMobile = new RegExp("[0-9]{9,}");
      let mobileErr = "";
      if (context.state.values[inputName].length <= 4) {
        mobileErr = "Must be more then 4 charecters";
      } else if (!regExpMobile.test(context.state.values.mobile)) {
        mobileErr = "Invalid mobile";
      }
      inputErrors(context, inputName, mobileErr);
      return false;
    }

    // changing name input
    else if (
      (inputName === "firstname" || inputName === "lastname") &&
      context.state.values[inputName].length <= 4
    ) {
      inputErrors(context, inputName, "Must be more then 4 charecters");
      return false;
    }

    //  changing password input
    else if (
      inputName === "password" &&
      context.state.values[inputName].length <= 4
    ) {
      inputErrors(context, inputName, "Must be more then 4 charecters");
      return false;
    } else if (
      inputName === "repeatPassword" &&
      context.state.values.repeatPassword !== context.state.values.password
    ) {
      inputErrors(context, inputName, "Password must be the same");
      return false;
    }
    return true;
  }
};

export const inputErrors = (context, inputName, err) => {
  context.setState(prevState => ({
    errors: {
      ...prevState.errors,
      [inputName]: err
    }
  }));
};

export const foundUser = (
  arrOfUsers,
  password,
  mail,
  getIndex = false,
  getItemId = false
) => {
  let user;
  arrOfUsers.forEach((element, index) => {
    if (element.email === mail && element.password === password) {
      user = element;
      getIndex && (user = index);
      getItemId && (user = element["_id"]);
    }
  });

  return user;
};

export const saveUserInLocalStorage = user => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const replaceUserInLocalStorage = user => {
  localStorage.setItem("user", JSON.stringify(user));
  let users = JSON.parse(localStorage.getItem("users"));
  let indexOfUser = foundUser(users, user.password, user.email, true);
  users[indexOfUser] = user;
  localStorage.setItem("users", JSON.stringify(users));
};

export const setDataToLocalStorage = async (dataObj, path) => {
  let user = await JSON.parse(localStorage.getItem("user"));
  let data = await user[path];
  if (typeof data === "object") {
    data.push(dataObj);
  } else if (typeof data === "number" && typeof data === "string") {
    data = dataObj;
  } else if (data === undefined) {
    data = [dataObj];
  } else alert("setDataToLocalStorage err, typeof data wrong");
  user[path] = data;

  replaceUserInLocalStorage(user);
};

export const updateDataWithLocalStorage = async (dataObj, path) => {
  let user = await JSON.parse(localStorage.getItem("user"));
  user[path] = dataObj;

  replaceUserInLocalStorage(user);
};
