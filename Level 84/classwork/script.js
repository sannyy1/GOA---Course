const products = [
    {
      id: 1,
      title: "სმარტფონი",
      price: "₾799",
      description: "მაღალი ხარისხის სმარტფონი, 64 GB შენახვით.",
      imgUrl: "https://via.placeholder.com/250x200.png?text=Smartphone",
    },
    {
      id: 2,
      title: "ლეპტოპი",
      price: "₾2499",
      description: "ლეპტოპი მაღალი შესრულებით, 16 GB RAM.",
      imgUrl: "https://via.placeholder.com/250x200.png?text=Laptop",
    },
    {
      id: 3,
      title: "სმარტ საათი",
      price: "₾399",
      description: "ჭკვიანი საათი, Fitbit Sync.",
      imgUrl: "https://via.placeholder.com/250x200.png?text=Smartwatch",
    }
  ];
  
  const cardsContainer = document.getElementById('cardsContainer');
  
  // კარტების შექმნა
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.innerHTML = `
      <img src="${product.imgUrl}" alt="${product.title}">
      <div class="card-content">
        <h3 class="card-title">${product.title}</h3>
        <p class="card-price">${product.price}</p>
        <p class="card-description">${product.description}</p>
        <button>ყიდვა</button>
      </div>
    `;
  
    cardsContainer.appendChild(card);
  });