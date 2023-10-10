window.addEventListener("load", solve);

function solve() {
    document.querySelector("#publish-btn").addEventListener("click", (publishTask) => {
        {
            const titleElement = document.getElementById("task-title");
            const categoryElement = document.getElementById("task-category");
            const contentElement = document.getElementById("task-content");

            const title = titleElement.value;
            const category = categoryElement.value;
            const content = contentElement.value;

            if (!title || !category || !content) {
                return;
            }
            const titleHeaderElement = document.createElement("h4");
            titleHeaderElement.textContent = title;

            const categoryParagraphElement = document.createElement("p");
            categoryParagraphElement.textContent = `Category: ${category}`;

            const contentParagraphElement = document.createElement("p");
            contentParagraphElement.textContent = `Content: ${content}`;

            const articleElement = document.createElement("article");
            articleElement.appendChild(titleHeaderElement);
            articleElement.appendChild(categoryParagraphElement);
            articleElement.appendChild(contentParagraphElement);
            const buttonEditElement = document.createElement("button");
            buttonEditElement.className = "action-btn edit";
            buttonEditElement.textContent = "Edit";
            const buttonPostElement = document.createElement("button");
            buttonPostElement.className = "action-btn post";
            buttonPostElement.textContent = "Post";

            const liElement = document.createElement("li");
            liElement.className = "rpost";
            liElement.appendChild(articleElement);
            liElement.appendChild(buttonEditElement);
            liElement.appendChild(buttonPostElement);

            const parent = document.querySelector("#review-list");
            parent.appendChild(liElement);
            const publishedContainer = document.getElementById("published-list");

            titleElement.value = "";
            categoryElement.value = "";
            contentElement.value = "";

            buttonEditElement.addEventListener("click", (editPost) => {
                titleElement.value = title;
                categoryElement.value = category;
                contentElement.value = content;

                liElement.remove();
            });
            buttonPostElement.addEventListener("click", (postTask) => {
                buttonPostElement.remove();
                buttonEditElement.remove();
                publishedContainer.appendChild(liElement);
            });
        }
    });
}





