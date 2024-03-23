async function getData(id) {
    console.log(id);
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

const fname = document.querySelector("#name");
const id = document.querySelector("#id");


async function display(value) {
    // console.trace();

    var users = await getData(value);

    if (!users || users.data.length === 0) {
        // Checking for null or empty data
        console.log("ID not found or there was an error.");
        const alertMessage = document.createElement("div");
        alertMessage.classList.add("alert", "alert-danger");
        alertMessage.textContent = "Please enter a valid Student Id";
        alertMessage.style.width = "50%";
        alertMessage.style.margin = "0 auto";
        alertMessage.style.display = "flex";
        alertMessage.style.alignItems = "center";
        alertMessage.style.justifyContent = "center";
        const section2 = document.querySelector(".section2");
        section2.appendChild(alertMessage);

        // Hide the alert message after half a second
        setTimeout(() => {
            alertMessage.style.display = "none";
        }, 2000);

        clearUserData();
    } else {
        // Process the data when it is not null
        fname.innerHTML = users.data.attributes.name;
        id.innerHTML = users.data.attributes.studentnum;
        console.log(users.data);
        }
}
display(26680);



// birth_date

// called_by

// careertype

// complaints


// email

// grade

// image

// name

// national_id

// papers

// payments

// phone

// publishedAt

// recp

// requests

// reservation_case

// reservation_date

// reserver

// schadule

// scholarship

// studentnum

// study_type
