document.addEventListener("DOMContentLoaded", () => {
    const expandables = document.querySelectorAll(".expandable");

    expandables.forEach(item => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();
            const children = item.querySelector(".children");
            if (children) {
                children.style.display = children.style.display === "block" ? "none" : "block";
            }
        });
    });
});