document.addEventListener("DOMContentLoaded", () => {
    // Xử lý nút tìm kiếm
    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", () => {
        console.log("Mở thanh tìm kiếm...");
    });

    // Xử lý chuyển đổi ngôn ngữ
    const langBtn = document.querySelector(".lang-btn");
    langBtn.addEventListener("click", () => {
        const textNode = langBtn.childNodes[0];
        if(textNode.nodeValue.trim() === "VIE") {
            textNode.nodeValue = "ENG ";
        } else {
            textNode.nodeValue = "VIE ";
        }
    });
});