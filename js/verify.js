// Read Certificate ID from URL
const params = new URLSearchParams(window.location.search);
const certificateId = params.get("id");

// HTML Elements
const loading = document.getElementById("loading");
const result = document.getElementById("certificateResult");
const notFound = document.getElementById("notFound");

// If no ID in URL
if (!certificateId) {
    loading.style.display = "none";
    notFound.style.display = "block";
} else {
    verifyCertificate(certificateId);
}

async function verifyCertificate(id) {

    try {

        // API URL
        const url = `${API_URL}?id=${encodeURIComponent(id)}`;

        const response = await fetch(url);

        const data = await response.json();

        loading.style.display = "none";

        if (data.status === "success") {

            document.getElementById("certificate_id").textContent = data.certificate_id;
            document.getElementById("student_name").textContent = data.student_name;
            document.getElementById("college_name").textContent = data.college_name;
            document.getElementById("branch_name").textContent = data.branch_name;
            document.getElementById("domain").textContent = data.domain;
            document.getElementById("duration").textContent = data.duration;
            document.getElementById("issue_date").textContent = data.issue_date;

            result.style.display = "block";

        } else {

            notFound.style.display = "block";

        }

    } catch (error) {

        console.error(error);

        loading.style.display = "none";

        notFound.style.display = "block";

    }

}