function createMurkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ name, img, id }) => `
      <li data-id=${id} class="js_card">
              <img src="${img}" alt="${name}" width="200">
              <h2>${name}</h2>
              <p>
                 <a class="js_info" href="#">More information</a>
              </p>
              <div>
              <button class="js_favorite">Add to favorite</button>
              <button class="js_basket">Add to basket</button>
              </div>
          </li>`
      )
      .join();
  } else {
    markup = `<li">
  <img src="https://i.pinimg.com/564x/88/dd/e4/88dde426d13cbd2fed941c4042babd6b.jpg" alt="404" width=50%>
    </li>`;
  }
  list.innerHTML = markup;
}

export { createMurkup };
