
type Inventary = Array<{ name:string, quantity: number, category: string }>

type OrganizedInventory = {
  [category: string]: {
    [productName: string]: number;
  };
};

  const inventory: Inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

  function organizeInventorys(inventory: Inventary): OrganizedInventory {
    return inventory.reduce((acumulado, objeto) => {
      const { category, name, quantity } = objeto;
        if (!acumulado[category]) {
        acumulado[category] = {};
      }
        if (!acumulado[category][name]) {
        acumulado[category][name] = 0;
      }
      acumulado[category][name] += quantity;
  
      return acumulado;
    }, {} as OrganizedInventory);
  }

  console.log(organizeInventorys(inventory))