import { Params } from 'next/dist/server/request/params'
import React from 'react'


interface PageProps {
    params: {
      id: number; 
    };
  }
export default async function page({params}:PageProps) {
  const {id} = await params;
  return (
    <div>pagina de detalles con id:{id}</div>
  )
}
