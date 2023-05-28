const fillContent = () => {
  try {
    let preData = allData.forEach((item) => {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", item?.id);
      newDiv.setAttribute("class", "category");
      const title = document.createElement("h4");
      title.setAttribute("class", "category-title");
      title.innerHTML += item?.title ?? "Пока что нет названия";
      newDiv.appendChild(title);
      const wrapRow = document.createElement("div");
      wrapRow.setAttribute("class", "row");

      item?.items?.forEach((element) => {
        const newItemCard = document.createElement("div");
        newItemCard.setAttribute("class", "col-4");
        let preDate = formatDate(element?.date);
        const card = document.createElement("div");
        card.setAttribute("class", "category-card");
        card.setAttribute("style", element?.imageStyle);
        card.innerHTML += `
            <div class="category-card--title">${element?.title}</div>
            <div class="category-card--date">${preDate}</div>
           `;

        const cardButton = document.createElement("button");
        cardButton.innerHTML += "Купить";
        cardButton.setAttribute("class", "category-card--add");
        cardButton.onclick = () => log(element);
        card.appendChild(cardButton);
        newItemCard.appendChild(card);
        wrapRow.appendChild(newItemCard);
      });

      newDiv.appendChild(wrapRow);
      content.appendChild(newDiv);
    });
  } catch (error) {
    console.error(error);
  }
};

fillContent();
