// ! Selecting Elements

let listVal = document.querySelector("#res-list");
let qty = document.querySelector("#qty");
let locale = document.querySelector("#locale");
let seed = document.querySelector("#seed");
let country_code = document.querySelector("#country");
let btn = document.querySelector(".btn button");
let body = document.querySelector("#main");

document.querySelector("#add_coun").style.display = "flex";

function hideAll() {
  document.querySelector("#add_coun").style.display = "none";
  document.querySelector("#imgtype").style.display = "none";
  document.querySelector("#img_width").style.display = "none";
  document.querySelector("#img_height").style.display = "none";
  document.querySelector("#per_gen").style.display = "none";
  document.querySelector("#per_bdaystart").style.display = "none";
  document.querySelector("#per_bdayend").style.display = "none";
  document.querySelector("#pro_min").style.display = "none";
  document.querySelector("#pro_max").style.display = "none";
  document.querySelector("#pro_tax").style.display = "none";
  document.querySelector("#pro_type").style.display = "none";
  document.querySelector("#user_char").style.display = "none";
}

function show(value) {
  hideAll();
  if (value === "addresses") {
    document.querySelector("#add_coun").style.display = "flex";
  } else if (value === "images") {
    document.querySelector("#imgtype").style.display = "flex";
    document.querySelector("#img_width").style.display = "flex";
    document.querySelector("#img_height").style.display = "flex";
  } else if (value === "persons") {
    document.querySelector("#per_gen").style.display = "flex";
    document.querySelector("#per_bdaystart").style.display = "flex";
    document.querySelector("#per_bdayend").style.display = "flex";
  } else if (value === "products") {
    document.querySelector("#pro_min").style.display = "flex";
    document.querySelector("#pro_max").style.display = "flex";
    document.querySelector("#pro_tax").style.display = "flex";
    document.querySelector("#pro_type").style.display = "flex";
  } else if (value === "texts") {
    document.querySelector("#user_char").style.display = "flex";
  } else if (value === "users") {
    document.querySelector("#per_gen").style.display = "flex";
  }
}

listVal.addEventListener("change", () => {
  show(listVal.value);
});

// ! Storing API in a variable

let url = `https://fakerapi.it/api/v2/`;

async function req(url) {
  let res = await axios.get(url);
  
  let data = res.data.data[0];
  console.log(data);
  
}
function address() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${locale.value}&_seed=${seed.value}&_country_code=${country_code.value}`;

  req(url);
}

function books() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${locale.value}&_seed=${seed.value}`;

  console.log(url);
  req(url);
}

function companies() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${locale.value}&_seed=${seed.value}`;

  req(url);
}
function creditCards() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${locale.value}&_seed=${seed.value}`;

  req(url);
}
function images() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${
    locale.value
  }&_seed=${seed.value}&_type=${
    document.querySelector("#img_type").value
  }&_width=${document.querySelector("#width").value}&_height=${
    document.querySelector("#height").value
  }`;

  req(url);
}
function persons() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${
    locale.value
  }&_seed=${seed.value}&_gender=${
    document.querySelector("#gender").value
  }&_birthday_start=${
    document.querySelector("#birthday-start").value
  }&_birthday_end=${document.querySelector("#birthday-end").value}`;

  req(url);
}

function places() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${locale.value}&_seed=${seed.value}`;

  req(url);
}

function products() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${
    locale.value
  }&_seed=${seed.value}&_price_min=${
    document.querySelector("#min").value
  }&_price_max=${document.querySelector("#max").value}&_taxes=${
    document.querySelector("#taxes").value
  }&_categories_type=${document.querySelector("#pcategory").value}`;

  req(url);
}

function texts() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${
    locale.value
  }&_seed=${seed.value}&_characters=${
    document.querySelector("#char").value
  }`;

  req(url);
}
function users() {
  url = `${url}${listVal.value}?_quantity=${qty.value}&_locale=${
    locale.value
  }&_seed=${seed.value}&_gender=${document.querySelector("#gender").value}`;

  req(url);
}

btn.addEventListener("click", () => {
    url = `https://fakerapi.it/api/v2/`;
  if (listVal.value == "addresses") {
    address();
  } else if (listVal.value == "books") {
    books();
  } else if (listVal.value == "companies") {
    companies();
  } else if (listVal.value == "creditCards") {
    creditCards();
  } else if (listVal.value == "images") {
    images();
  } else if (listVal.value == "persons") {
    persons();
  } else if (listVal.value == "places") {
    places();
  } else if (listVal.value == "products") {
    products();
  } else if (listVal.value == "texts") {
    texts();
  } else if (listVal.value == "users") {
    users();
  }
});


