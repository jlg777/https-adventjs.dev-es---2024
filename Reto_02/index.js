function createFrame(names) {
    // Encuentra la palabra más larga en el array
    const palabraLarga = names.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    // El ancho del marco es la longitud de la palabra más larga más 4 (para los asteriscos y el espacio)
    const frameWidth = palabraLarga.length + 4;

    // Inicializa la variable para almacenar el resultado
    let result = '';

    // Añade el borde superior del marco
    result += '*'.repeat(frameWidth) + '\n';

    // Añade cada nombre dentro del marco, alineado a la izquierda
    names.forEach(palabra => {
        result += `* ${palabra.padEnd(palabraLarga.length, ' ')} *\n`;
    });

    // Añade el borde inferior del marco
    result += '*'.repeat(frameWidth);

    // Devuelve el resultado como un string
    return result;
}

const frame = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(frame);  // Aquí mostramos el marco generado
