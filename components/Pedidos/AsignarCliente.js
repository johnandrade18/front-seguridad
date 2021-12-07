import React, {useState, useEffect, useContext} from 'react';
import Select from 'react-select'
import {gql, useQuery} from '@apollo/client';
import PedidoContext from '../../context/Pedidos/PedidoContext'; 

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      nombre
      apellido
      empresa
      email
    }
  }
`;

const AsignarCliente = () => {

    const  [ cliente, setCliente ] = useState( [] );

    //Context de pedidos
    const pedidoContext = useContext(PedidoContext);
    const {agregarCliente} = pedidoContext;

    //Consultar la base de datos
    const {data, loading, error} = useQuery(OBTENER_CLIENTES_USUARIO) ;


    useEffect(() =>{
      agregarCliente(cliente);

    }, [cliente])

    const seleccionarCliente = clientes => {
        setCliente(clientes); 
    }

    //Resultados de la Consulta
    if (loading) return null;

    const {obtenerClientesVendedor} = data;
    
  
    return ( 

        <>
            <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">1. - Asigna un cliente al pedido </p>
        <Select
        className="mt-3"


             options = {obtenerClientesVendedor}
             //isMulti = {true}
             onChange = {opcion => seleccionarCliente(opcion) }
             //pasando el prop para que acepte los valores desde la base de datos
             getOptionValue = { opciones => opciones.id}
             //para q se lean los nombres de los valores que entran desde la base de datos
             getOptionLabel = {opciones => opciones.nombre}
             placeholder = "Busque o seleccione el cliente"
             noOptionsMessage = { () => "No hay resultados"}
            />
        </>
    );

    }

export default AsignarCliente;