import Table from './components/Table';

// En el componente App:

// Escribir un componente Table.jsx que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.

// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente la función reduce para calcular el promedio.

function App() {
  const netIncomes = [{ brand: 'McDonalds', income: 1291283}, { brand: 'Burger King', income: 1927361 }, { brand: 'KFC', income: 1098463 }];

return (
  <>
    <Table netIncomes={netIncomes}/>
  </>
)
}

export default App
