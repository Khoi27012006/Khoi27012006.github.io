// Tạo các phần tử tuyết rơi
function createSnowflakes() {
  const snowContainer = document.querySelector('.snow-container');
  const numSnowflakes = 30; // Số lượng tuyết rơi

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowContainer.appendChild(snowflake);
  }
}

createSnowflakes();
