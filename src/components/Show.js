import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
//Para trabajar con la BD
//Extraer un documento, varios docuemntos y eleiminar 
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from './firebaseConfig/firebase'

//Alertas de react y sweetalert2 para elimminar un documento
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

const Show = () => {

    //1 Configuracion de hooks : Ganchos (API de React)
    //Nos permite gestionar los estados en los componentes funcionles

    //UseState , devuelve un valor y una funcion para actualizar
    const [products, setProducts] = useState( [] )
    //2 Referenciamos a la BD de firestore
    const productsCollection = collection (db, "products")
    //3 Función para mostrar todos los documentos
    const getProducts = async () =>{
        const data = await getDocs(productsCollection)
        //console.log(data.docs)
        setProducts(
            data.docs.map ( (doc) => ( {...doc.data(), id:doc.id}))
        )
 
    }
    //Funcion para eliminar un documento
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
    }
    //Funcion de confirmacion para sweetalert
    const confirmDelete = (id) =>{
        MySwal.fire({
            title: 'Eliminar el producto?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
              Swal.fire(
                'Deleted!',
                'Tu producto ah sido eliminado.',
                'success'
              )
            }
          })
    }
    //Usamos useEffects
    useEffect( () =>{
        getProducts()
        //eslint-disable vista de nuestro componente
    }, [] )
    //Devolvemos vista de nuestro componente

  return (
    <>
    <div className='container'>
       <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-secondary mt-2 mb-2' >Create</Link>
                </div>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map( (product) =>(
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>

                                    <Link to={'/edit/' + product.id } 
                                    className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>



                                    <button onClick={() => {confirmDelete(product.id) } }
                                    className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        ) ) }
                    </tbody>

                </table>
            </div>
       </div>
    </div>
    </>
  )
}

export default Show