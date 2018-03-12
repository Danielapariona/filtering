import React from 'react';
import PropTypes from 'prop-types';

// ahora importamos nuestro componente
import FilterableProductTable from '../FilterableProductTable/components/index';

// todos los datos que Main necesita los recibimos como props
const Main = ({ products }) => {
  // TODO: Hack para que renderice. Quitar luego de setear Redux.
  // Productos estáticos
  // products = []
  products = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7' }
  ];

  return (
    <div>
      <FilterableProductTable products={products}></FilterableProductTable>
    </div>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main;