import { Params } from 'next/dist/server/request/params'
import React from 'react'


interface PageProps {
    params: {
      id: number; // El nombre 'id' debe coincidir con el nombre de tu carpeta dinámica: [id]
    };
  }
export default function page({id}:PageProps) {

  return (
    <div>pagina de detalles con id:{id}</div>
  )
}
