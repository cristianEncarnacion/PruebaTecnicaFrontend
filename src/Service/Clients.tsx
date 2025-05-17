import type { Client } from "../Interfaces/Client.d"
const API="http://localhost:3000/clients"
export const getClientes=async() :Promise<Client[]>=> {
    try {
        const response=await fetch(API)
        const data=await response.json()
        return data as Client[]
    } catch (error) {
        throw(error)
    }
}
export const getClientesById=async(id:string) :Promise<Client>=> {
    try {
        const response=await fetch(`${API}/${id}`)
        const data=await response.json()
        return data as Client
    } catch (error) {
        throw(error)
    }
}
export const addClient=async(client:Client):Promise<Client[]>=>{
    try {
        const response=await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(client)
        })
        const data = await response.json();
        return data as Client[];
    } catch (error) {
        throw(error)
    }
}
export const deleteClient=async(id:string) :Promise<void>=>{
    console.log( id)

    try {
        const response = await fetch(`${API}/${id}`, {
            method:"DELETE", 
        })
        if (!response.ok) {
            throw new Error('Error al eliminar el cliente');
          }
    } catch (error) {
        throw(error)
    }
}

export const updateClient=async(client:Client):Promise<Client[]>=>{
    try {
        const response=await fetch(`${API}/${client.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(client)
        })
        const data = await response.json();
        return data as Client[];
    } catch (error) {
        throw(error)
    }
}


