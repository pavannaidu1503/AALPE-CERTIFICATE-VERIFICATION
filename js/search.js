document.getElementById("verifyBtn").addEventListener("click", verifyCertificate);

document.getElementById("certificateId").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        verifyCertificate();
    }
});

function verifyCertificate() {

    const certificateId = document.getElementById("certificateId").value.trim();

    if (certificateId === "") {
        alert("Please enter a Certificate ID.");
        return;
    }

    window.location.href = `verify.html?id=${encodeURIComponent(certificateId)}`;
}