import React from 'react';
import PropTypes from 'prop-types';

// ahora importamos nuestro componente
import FilterableProductTable from '../FilterableProductTable/index';

// todos los datos que Main necesita los recibimos como props
const Main = ({ products }) => {
  // TODO: Hack para que renderice. Quitar luego de setear Redux.
  products = []

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