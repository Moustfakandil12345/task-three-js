var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var siteList = [];

if (localStorage.getItem("siteCollection") !== null) {
    siteList = JSON.parse(localStorage.getItem("siteCollection"));
    displaySites();
}

function addData() {
    if (validationName()&&validationURL()) {
        var site = {
            name: siteNameInput.value,
            url: siteURLInput.value
        };
        siteList.push(site);
        localStorage.setItem("siteCollection", JSON.stringify(siteList));
        deleteForm();
        displaySites();
    }
    else{
        var alert3 = document.getElementById("contentData");
        alert3.classList.remove("d-none");
    }
}

function displaySites() {
    var cartona = "";
    for (var i = 0; i < siteList.length; i++) {
        cartona += `
        <tr class="second-tr">
            <th>${i + 1}</th>
            <th>${siteList[i].name}</th>
            <th><a href="${siteList[i].url}" target="_blank" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</a></th>
            <th><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></th>
        </tr>`;
    }
    document.getElementById("bodyData").innerHTML = cartona;
}

function deleteForm() {
    siteNameInput.value = null;
    siteURLInput.value = null;
    siteNameInput.classList.remove("is-valid");
    siteURLInput.classList.remove("is-valid");
}

function deleteSite(index) {
    siteList.splice(index, 1);
    localStorage.setItem("siteCollection", JSON.stringify(siteList));
    displaySites();
}

function validationName() {
    var text = siteNameInput.value;
    var msgName = document.getElementById("msgAlert");
    var regex = /^[A-z]{3,}$/;
    if (regex.test(text)) {
        siteNameInput.classList.add("is-valid");
        siteNameInput.classList.remove("is-invalid");
        msgName.classList.add("d-none");
        return true;
    }
    else {
        siteNameInput.classList.add("is-invalid");
        siteNameInput.classList.remove("is-valid");
        msgName.classList.remove("d-none");
        return false;
    }
}
function validationURL() {
    var url = siteURLInput.value;
    var msgURL = document.getElementById("msgAlert2");
    var regex = /((https)|(http)){0,1}(:{0,1}[\/]{0,2})(www\.){0,1}[A-z]{1,15}\.com/i;
    if (regex.test(url)) {
        siteURLInput.classList.add("is-valid");
        siteURLInput.classList.remove("is-invalid");
        msgURL.classList.add("d-none");
        return true;
    }
    else {
        siteURLInput.classList.add("is-invalid");
        siteURLInput.classList.remove("is-valid");
        msgURL.classList.remove("d-none");
        return false;
    }
}




