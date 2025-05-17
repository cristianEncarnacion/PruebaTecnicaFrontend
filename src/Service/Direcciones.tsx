const APIDIRECCIONES = "http://localhost:3000/direcciones";

export const getDireccionesByClienteId = async (clienteId: string) => {
  try {
    if (!clienteId) throw new Error("El clienteId es requerido.");
    const res = await fetch(`${APIDIRECCIONES}?clienteId=${clienteId}`);
    if (!res.ok) throw new Error(`Error al obtener direcciones: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addDireccion = async (direccion: string, clienteId: string) => {
  try {
    if (!direccion || !clienteId) throw new Error("La dirección y el clienteId son requeridos.");
    const res = await fetch(APIDIRECCIONES, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clienteId,
        direccion,
      }),
    });
    if (!res.ok) throw new Error(`Error al agregar dirección: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateDireccion = async (
  id: string,
  direccion: string,
  clienteId: string
) => {
  try {
    if (!id || !direccion || !clienteId) throw new Error("El id, la dirección y el clienteId son requeridos.");
    const res = await fetch(`${APIDIRECCIONES}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clienteId,
        direccion,
      }),
    });
    if (!res.ok) throw new Error(`Error al actualizar dirección: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteDireccion = async (id: string) => {
  try {
    if (!id) throw new Error("El id es requerido.");
    const res = await fetch(`${APIDIRECCIONES}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Error al eliminar dirección: ${res.statusText}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
