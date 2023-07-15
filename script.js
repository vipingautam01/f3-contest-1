// Function to fetch the menu items from the JSON file
function getMenu() {
    fetch('food.json')
      .then(response => response.json())
      .then(data => {
        // Display the menu items on the screen
        data.forEach(item => {
          console.log(`Name: ${item.name}`);
          console.log(`Price: $${item.price}`);
          console.log(`Image: ${item.imgSrc}`);
          console.log('-----------------------------------');
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // Function to take the order
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const menu = [
          'Cheeseburger',
          'Pizza',
          'Tacos',
          'Sushi',
          'Pasta',
          'Fried Chicken',
          'Grilled Cheese Sandwich',
          'Steak',
          'Caesar Salad',
          'Fish and Chips',
          'Ramen',
          'Burrito',
          'Pho',
          'Pad Thai',
          'Gyro',
          'Ice Cream',
          'Smoothie',
          'Apple Pie',
          'Chocolate Cake',
          'Pancakes',
          'Cupcake',
          'Crepes',
          'Club Sandwich',
          'Falafel',
          'Curry'
        ];
  
        const order = {
          burgers: []
        };
  
        // Randomly select three burgers
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * menu.length);
          const burger = menu[randomIndex];
          order.burgers.push(burger);
        }
  
        resolve(order);
      }, 2500);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // Function for payment
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // Function to display a thank you message
  function thankYou() {
    alert('Thank you for eating with us today!');
  }
  
  // Handling promises using async/await
  async function processOrder() {
    try {
      await getMenu();
      const order = await takeOrder();
      console.log('Order:', order);
      const orderStatus = await orderPrep();
      console.log('Order Status:', orderStatus);
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
      if (paymentStatus.paid) {
        thankYou();
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  // Calling the processOrder function to start the order processing
  processOrder();
  