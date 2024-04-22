import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { items } from "./Data"
import Product from "./Product"

const Search = ({cart,setCart}) => {

// console.log(useParams())

const {term}= useParams()
const [filteredData,setFilteredData]=useState([])

useEffect(() => {

  const filteredData=()=>{
    const  data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));

    setFilteredData(data);
  }
  filteredData();

}, [term])

  return (
    <>
      <Product cart={cart} setCart={setCart} items={filteredData}/>
    </>
  )
}

export default Search
