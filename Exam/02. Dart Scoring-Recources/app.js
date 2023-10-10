window.addEventListener("load", solve);

function solve() {

    const addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", (publishTask) => {

        const playerNameElement = document.getElementById("player");
        const scoreElement = document.getElementById("score");
        const roundElement = document.getElementById("round");

        const player = playerNameElement.value;
        const score = scoreElement.value;
        const round = roundElement.value;

        if (!player || !score || !round) {
            return;
        }
        const ulContainer = document.getElementById("sure-list");
        const liElement = document.createElement("li");
        liElement.className = "dart-item";
        const article = document.createElement("article");

        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = player;
        article.appendChild(nameParagraph);
        const scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = `Score: ${score}`;
        article.appendChild(scoreParagraph);
        const roundParagraph = document.createElement("p");
        roundParagraph.textContent = `Round: ${round}`;
        article.appendChild(roundParagraph);
        liElement.appendChild(article);

        const editButton = document.createElement("button");
        editButton.className = "btn edit";
        editButton.textContent = "edit";
        liElement.appendChild(editButton);

        const okButton = document.createElement("button");
        okButton.className = "btn ok";
        okButton.textContent = "ok";

        liElement.appendChild(okButton);
        ulContainer.appendChild(liElement);
        addButton.disabled = true;


        playerNameElement.value = "";
        scoreElement.value = "";
        roundElement.value = "";

        editButton.addEventListener("click", (edit) =>{
            playerNameElement.value = player;
            scoreElement.value = score;
            roundElement.value = round;

            liElement.remove();
            addButton.disabled = false;
        });
        const scoreBoardContainer = document.getElementById("scoreboard-list");
        okButton.addEventListener("click", (saveBoard) =>{

            liElement.removeChild(editButton);
            liElement.removeChild(okButton);
            scoreBoardContainer.appendChild(liElement);
            addButton.disabled = false;
            const clearButton = document.getElementsByClassName("btn clear")[0];
            clearButton.addEventListener("click", (ev) =>{
                scoreBoardContainer.remove();
            })

        });



    });
}
  