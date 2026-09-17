const uploadBtn = document.getElementById("uploadBtn");
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const previewImage = document.getElementById("previewImage");

uploadBtn.addEventListener("click", function () {
    photoInput.click();
});

photoInput.addEventListener("change", function () {
    const file = photoInput.files[0];

    if (file) {
        const imageURL = URL.createObjectURL(file);

        previewImage.src = imageURL;
        photoPreview.style.display = "block";

        uploadBtn.textContent = "✅ Photo Selected";
    }
});
