document.addEventListener("DOMContentLoaded", async () => {
  // 1
  const userContainer = document.querySelector("#user_cards");
  //   console.log(userContainer);
  //   2
  const apiHit = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  //   3
  const createUserCard = (user) => ` <div class="card">
            <h2>${user.name}</h2>
            <p>${user.username}</p>
        </div>`;

  // 4
  const displayUsers = (asd) => {
    console.log(asd);
    userContainer.innerHTML = asd.map((a) => createUserCard(a)).join("");
  };
  //   5
  const users = await apiHit();
  displayUsers(users);
  //   console.log(displayUsers);
});
