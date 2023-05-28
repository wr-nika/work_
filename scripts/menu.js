const fillMenu = () => {
  let preData = allData.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "header-list--item justify-content-end");
    const newA = document.createElement("a");
    newA.setAttribute("href", `#${item?.id}`);
    newA.innerHTML += item?.title;
    newLi.appendChild(newA);
    menuList.appendChild(newLi);
    // menuListFooter.appendChild(newLi);
  });
};
const fillFooter = () => {
  let preData = allData.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "header-list--item justify-content-end");
    const newA = document.createElement("a");
    newA.setAttribute("href", `#${item?.id}`);
    newA.innerHTML += item?.title;
    newLi.appendChild(newA);
    menuListFooter.appendChild(newLi);
  });
};
fillFooter();
fillMenu();
