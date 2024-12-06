function createXmasTree(height, ornament) {
    let tree = '';
    for (let i = 1; i <= height; i++) {
        const spaces = '_'.repeat(height - i);  // Espacios para centrar cada fila
        const ornaments = ornament.repeat(2 * i - 1);  // Número de adornos en cada capa
        tree += spaces + ornaments + spaces + '\n';  // Forma la fila con los adornos
    }

    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);

    tree += trunk+'\n'+trunk;

    return tree;
}

console.log(createXmasTree(6, '*'));
