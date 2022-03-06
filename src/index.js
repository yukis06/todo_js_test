import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
  // console.log(li);
  // alert(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // p生成
  const p = document.createElement("p");
  p.className = "list-row-text";
  p.innerText = text;
  // li生成
  const li = document.createElement("li");

  // button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // delete
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    // append
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstChild.innerText;
      // console.log(text);
      createIncompleteList(text);
    });

    backButton.innerText = "戻す";
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
