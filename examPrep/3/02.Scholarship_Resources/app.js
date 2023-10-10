window.addEventListener("load", solve);

function solve() {
    
  document.querySelector("#next-btn").addEventListener("click", (e) =>{
    const studentElement = document.getElementById("student");
    const universityElement = document.getElementById("university");
    const scoreElement = document.getElementById("score");

    const student = studentElement.value;
    const university = universityElement.value;
    const score = scoreElement.value;

    if(!student || !university || !score){
      return;
    }
    const ul = document.getElementById("preview-list");
    const li = document.createElement("li");
    li.className = "application";
    const article = document.createElement("article");

    const studentHeaderElement = document.createElement("h4");
    studentHeaderElement.textContent = student;

    const universityParagraphElement = document.createElement("p");
    universityParagraphElement.textContent = `University: ${university}`;
    const scoreParagraphElement = document.createElement("p");
    scoreParagraphElement.textContent = `Score: ${score}`;
    article.appendChild(studentHeaderElement);
    article.appendChild(universityParagraphElement);
    article.appendChild(scoreParagraphElement);

    const editButtonElement = document.createElement("button");
    editButtonElement.className = "action-btn edit";
    editButtonElement.textContent = "edit";
    const applyButtonElement = document.createElement("button");
    applyButtonElement.className = "action-btn apply";
    applyButtonElement.textContent = "apply";
    li.appendChild(article);
    li.appendChild(editButtonElement);
    li.appendChild(applyButtonElement);

    ul.appendChild(li);

    const nextButtonElement = document.getElementById("next-btn");
    studentElement.value = "";
    universityElement.value = "";
    scoreElement.value = "";
    nextButtonElement.disabled = true;

    editButtonElement.addEventListener("click", (editInfo) => {
      studentElement.value = student;
      universityElement.value = university;
      scoreElement.value = score;
      li.remove()
      nextButtonElement.disabled = false;
    });
    applyButtonElement.addEventListener("click", (applyInfo) => {
      const applyContainer = document.getElementById("candidates-list");
      editButtonElement.remove();
      applyButtonElement.remove();
      applyContainer.appendChild(li);
      nextButtonElement.disabled = false;
    });



  });
  }
  