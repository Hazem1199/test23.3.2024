async function getDataById(id) {
  const baseUrl = `https://srm-vbc7.onrender.com/api/basics/${id}`;
  const token =
    "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(baseUrl, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function display(value) {
  const users = await getDataById(value);
  console.log(users.data);
}















async function getData() {
  const baseUrl = `https://srm-vbc7.onrender.com/api/basics/`;
  const token =
    "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(baseUrl, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const searchInput = document.getElementById("searchInput");

async function displayByPhone(value) {
  const users = await getData();
  const user = users.data.find((user) => user.attributes.phone.includes(value) );
  console.log(user);

  if (user) {
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    name.innerHTML = user.attributes.name;
    id.innerHTML = user.attributes.studentnum;
  }
}

async function displayByEmail(value) {
  const users = await getData();
  const user = users.data.find((user) => user.attributes.email.includes(value) );
  console.log(user);

  if (user) {
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    name.innerHTML = user.attributes.name;
    id.innerHTML = user.attributes.studentnum;
  }
}



const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const searchValue = searchInput.value.trim();
  if (!searchValue) {
    alert("Please enter a search value");
    return;
  }
  // Check if the search value contains "@" to determine if it's an email
  if (searchValue.includes("@")) {
    await displayByEmail(searchValue);
  } else if (searchValue.length > 5) { // Assuming phone number should have more than 5 digits
    await displayByPhone(searchValue);
  } else {
    await display(searchValue);
  }
});
