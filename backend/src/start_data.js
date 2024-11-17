const User = require('./models/userModel');
const Book = require('./models/bookModel');

const insertInitialUserData = async () => {

  const userData = [ 
    // Inserta los datos de usuario aquí si es necesario
  ];

  // Insertar datos con opción ignoreDuplicates
  // Para actualizar todas las filas: updateOnDuplicate: Object.keys(User.rawAttributes)
  await User.bulkCreate(userData, { ignoreDuplicates: true });
  
  const bookData = [
    { title: 'TituloA', year: 1955 },
    { title: 'TituloB', year: 1988 },
    { title: 'TituloC', year: 1475, user_id: 2 }
  ];
  
  // Insertar datos con opción ignoreDuplicates
  await Book.bulkCreate(bookData, { ignoreDuplicates: true });
};

module.exports = { insertInitialUserData };

