function attachEvents() {
    document.getElementById("load-product").addEventListener("click", loadProducts);
    updateProductButton.addEventListener("click", updateProduct);
    addProductButton.addEventListener("click", addProducts);

}

const updateProductButton = document.getElementById("update-product");
const addProductButton = document.getElementById("add-product");


const baseUrl = "http://localhost:3030/jsonstore/grocery/";

const productNameElement = document.getElementById("product");
const productCountElement = document.getElementById("count");
const productPriceElement = document.getElementById("price");
let productIdElement = "";
let tbody = document.querySelector("#tbody");


async function addProducts(ev) {
    ev.preventDefault();

    const pr = createProduct();
    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pr),
    });
    await loadProducts(ev);

    clearInputs();


}

async function updateProduct(ev) {
    ev.preventDefault();

    const pr = createProduct();
    await fetch(`${baseUrl}${productIdElement}`, {
        method: "PATCH",
        body: JSON.stringify(pr),
    });
    clearInputs();

    addProductButton.disabled = false;
    updateProductButton.disabled = true;

    await loadProducts(ev);


}

function createProduct() {
    const product = productNameElement.value;
    const count = productCountElement.value;
    const price = productPriceElement.value;

    if (!product || !count || !price) {
        return;
    }
    const pr = {
        product,
        count,
        price,
    }
    return pr;

}

function clearInputs() {
    productNameElement.value = "";
    productCountElement.value = "";
    productPriceElement.value = "";
}

async function loadProducts(ev) {
    ev.preventDefault();
    tbody.innerHTML = "";

    const response = await fetch(baseUrl);

    const data = await response.json();
    const products = Object.keys(data)
        .map(key => ({_id: key, ...data[key]}));

    for (const product of products) {
        let productElement = renderProduct(product);
        productElement.setAttribute("data-product-id", product._id);
        tbody.appendChild(productElement);
    }


}

function renderProduct(product) {
    const nameTd = document.createElement("td");
    nameTd.className = "name";
    nameTd.textContent = product.product;

    const countTd = document.createElement("td");
    countTd.className = "count-product";
    countTd.textContent = product.count;

    const priceTd = document.createElement("td");
    priceTd.className = "product-price";
    priceTd.textContent = product.price;

    const tr = document.createElement("tr");
    tr.appendChild(nameTd);
    tr.appendChild(countTd);
    tr.appendChild(priceTd);

    const buttonContainerTd = document.createElement("td");
    buttonContainerTd.className = "btn";
    const updateButton = document.createElement("button");
    updateButton.className = "update";
    updateButton.textContent = "Update";
    buttonContainerTd.appendChild(updateButton);
    updateButton.addEventListener("click", () => {
        productNameElement.value = product.product;
        productCountElement.value = product.count;
        productPriceElement.value = product.price;
        productIdElement = tr.getAttribute("data-product-id");

        updateProductButton.disabled = false;
        addProductButton.disabled = true;

    });
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async (e) => {

        e.preventDefault();
        await fetch(`${baseUrl}${product._id}`, {
            method: "DELETE",

        });
        tr.remove();
        await loadProducts();
    });
    buttonContainerTd.appendChild(deleteButton);
    tr.appendChild(buttonContainerTd);

    return tr;

}

attachEvents()