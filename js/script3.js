const element = document.querySelector('.bot');

// تحديد المسافة القصيرة التي يمكن أن يتحرك فيها العنصر
const moveDistance = 20; // 50 بكسل

function animateElement() {
  // توليد إزاحة عشوائية قصيرة في الاتجاهات X و Y
  const randomX = (Math.random() - 0.5) * moveDistance;
  const randomY = (Math.random() - 0.5) * moveDistance;
  
  // الحصول على الموقع الحالي للعنصر
  const currentX = element.offsetLeft;
  const currentY = element.offsetTop;
  
  // تطبيق الترجمة الجديدة بناءً على الموقع الحالي
  element.style.transform = `translate(${currentX + randomX}px, ${currentY + randomY}px)`;
}

setInterval(animateElement, 1000); // تحرك العنصر كل ثانية
