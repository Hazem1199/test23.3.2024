// async function getData(student_num) {
//   const baseUrl = `https://srm-vbc7.onrender.com/api/invoices/${student_num}`;
//   const token =
//     "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   const response = await fetch(baseUrl, { headers });
//   if (response) {
//     for (let i = 0; i < 1; i++) {
//       const data = await response.json();
//       return data;
//     }
//   }
//   return data;
// }

// async function display(studentNumber) {
//   const invoaices = await getData(studentNumber);

//   console.log(invoices.data);

//   // const foundInvoices = invoices.data.filter(
//   //   (invoice) => invoice.attributes.student_num === studentNumber
//   // );

//   // console.log(foundInvoices);

//   // if (foundInvoices.length) {
//   //   const studentInvoices = foundInvoices.map((invoice) => ({
//   //     id: invoice.id,
//   //     Amount: invoice.attributes.amount,
//   //     Timestamp: invoice.attributes.time_stamp,
//   //     Notes: invoice.attributes.note,
//   //     autoSerial: invoice.attributes.serial,
//   //     InvoiceType: invoice.attributes.invoice_type,
//   //   }));

//   //   // console.log(studentInvoices);
//   // }
// }

// display(26680);

// // async function display(value) {
// //   const users = await getDataById(value);
// //   console.log(users.data);
// // }

// // async function getData() {
// //   const baseUrl = `https://srm-vbc7.onrender.com/api/basics/`;
// //   const token =
// //     "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
// //   const headers = {
// //     Authorization: `Bearer ${token}`,
// //   };
// //   try {
// //     const response = await fetch(baseUrl, { headers });
// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // const searchInput = document.getElementById("searchInput");

// // async function displayByPhone(value) {
// //   const users = await getData();
// //   const user = users.data.find((user) => user.attributes.phone.includes(value) );
// //   console.log(user);

// //   if (user) {
// //     const name = document.getElementById("name");
// //     const id = document.getElementById("id");
// //     name.innerHTML = user.attributes.name;
// //     id.innerHTML = user.attributes.studentnum;
// //   }
// // }

// // async function displayByEmail(value) {
// //   const users = await getData();
// //   const user = users.data.find((user) => user.attributes.email.includes(value) );
// //   console.log(user);

// //   if (user) {
// //     const name = document.getElementById("name");
// //     const id = document.getElementById("id");
// //     name.innerHTML = user.attributes.name;
// //     id.innerHTML = user.attributes.studentnum;
// //   }
// // }

// // const searchButton = document.querySelector(".search-button");
// // searchButton.addEventListener("click", async (event) => {
// //   event.preventDefault();
// //   const searchValue = searchInput.value.trim();
// //   if (!searchValue) {
// //     alert("Please enter a search value");
// //     return;
// //   }
// //   // Check if the search value contains "@" to determine if it's an email
// //   if (searchValue.includes("@")) {
// //     await displayByEmail(searchValue);
// //   } else if (searchValue.length > 5) { // Assuming phone number should have more than 5 digits
// //     await displayByPhone(searchValue);
// //   } else {
// //     await display(searchValue);
// //   }
// // });

let filterdata = [];

async function getInvoiceById(id) {
  const baseUrl = `https://srm-vbc7.onrender.com/api/invoices`;
  const url = `${baseUrl}?Filter[basic_id]=${id}`;

  const headers = {
    Authorization: `Bearer f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de`,
  };

  const response = await fetch(url, { headers });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
}

getInvoiceById(26680);
