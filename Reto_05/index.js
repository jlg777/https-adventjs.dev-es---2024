/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
    const shoePairs = {};
    const availablePairs = [];
  
    for (const shoe of shoes) {
      if (!shoePairs[shoe.size]) {
        shoePairs[shoe.size] = { I: 0, R: 0 };
      }
      shoePairs[shoe.size][shoe.type]++;
    }
  
    for (const size in shoePairs) {
      const pairs = Math.min(shoePairs[size].I, shoePairs[size].R);
      for (let i = 0; i < pairs; i++) {
        availablePairs.push(Number(size));
      }
    }
  
    return availablePairs;


  }
  
  // Ejemplo de uso
  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ];
  
  console.log(organizeShoes(shoes))