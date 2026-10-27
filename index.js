const products = document.getElementById('products')
const API = 'https://dummyjson.com/products'

let allProducts = []
let cart = []

async function getProducts() {
  try {
    const res = await fetch(API)
    const data = await res.json()
    allProducts = data.products
    show(allProducts)
  } catch (error) {
    console.log(error)
  }
}

function show(data) {
  products.innerHTML = data.map(item => `
    <div class="card">
      <img src="${item.thumbnail}" alt="${item.title}">
      <div class="card-body">
        <div class="card-category">${item.category}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-brand">${item.brand ?? ''}</div>
        <div class="card-price">$${item.price}</div>
        <button class="btn-add-cart" onclick="addToCart(${item.id})">Add to cart</button>
      </div>
    </div>
  `).join("")
}

function addToCart(id) {
  const item = allProducts.find(p => p.id == id)
  if (!item) return
  cart.push(item)
  updateCartUI()
}

function clearCart() {
  cart = []
  updateCartUI()
}

function toggleCart() {
  document.getElementById('cartDropdown').classList.toggle('open')
}

function updateCartUI() {
  document.getElementById('cartCount').textContent = cart.length
  const container = document.getElementById('cartItems')

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Корзина пуста</p>'
    return
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.thumbnail}" alt="${item.title}">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      </div>
    </div>
  `).join('')
}

getProducts()