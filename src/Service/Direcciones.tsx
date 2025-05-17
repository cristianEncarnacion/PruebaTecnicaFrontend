const APIDIRECCIONES="http://localhost:3000/direcciones"

export const getDireccionesByClienteId = async (clienteId: string) => {
  const res = await fetch(`${APIDIRECCIONES}?clienteId=${clienteId}`);
  return await res.json();
};

export const addDireccion = async (direccion: string, clienteId: string) => {
  const res = await fetch(APIDIRECCIONES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clienteId,
      direccion 
    })
  });
  return await res.json();
};

export const updateDireccion = async (
  id: string,
  direccion: string,
  clienteId: string
  ) => {
  const res = await fetch(`${APIDIRECCIONES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clienteId,
      direccion
     })
  });
  return await res.json();
};

export const deleteDireccion = async (id: string) => {
  await fetch(`${APIDIRECCIONES}/${id}`, { method: "DELETE" });
};
