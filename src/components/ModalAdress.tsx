import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { addDireccion, deleteDireccion, getDireccionesByClienteId, updateDireccion } from "../Service/Direcciones";

type ModalAddressProps = {
  clienteId: string;
  open: boolean;
  onClose: () => void;
};

const ModalAdress = ({ clienteId, open, onClose }: ModalAddressProps) => {
  const [newAddress, setNewAddress] = useState('');
  const [addresses, setAddresses] = useState<{ id: string; direccion: string }[]>([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const res = await getDireccionesByClienteId(clienteId);
      setAddresses(res);
    };
    
    if (open) fetchAddresses();
  }, [open, clienteId]);

  const handleAddAddress = async () => {
    if (!newAddress.trim()) return;
    const newDir = await addDireccion(newAddress.trim(), clienteId);
    setAddresses((prev) => [...prev, newDir]);
    setNewAddress('');
  };

  const handleEditAddress = async (index: number) => {
    const current = addresses[index];
    const updated = prompt("Editar dirección:", current.direccion);
    if (updated && updated.trim()) {
      await updateDireccion(String(current.id), updated.trim(), clienteId);
      const updatedList = [...addresses];
      updatedList[index].direccion = updated.trim();
      setAddresses(updatedList);
    }
  };

  const handleDeleteAddress = async (index: number) => {
    const id = addresses[index].id;
    await deleteDireccion(String(id));
    setAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Modal open={open} onClose={onClose}>
    <Fade in={open}>
      <Box
        sx={{
          width: 450,
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          mx: 'auto',
          mt: '10%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h6" sx={{ color: '#012F6B', fontWeight: 'bold' }}>
          Agregar Dirección
        </Typography>
  
        <Box display="flex" gap={2}>
          <input
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Nueva dirección"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <Button
            variant="contained"
            onClick={handleAddAddress}
            sx={{ backgroundColor: '#0075C9' }}
          >
            Agregar
          </Button>
        </Box>
  
        <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {addresses.map((addr, index) => (
            <Box
              component="li"
              key={addr.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <Typography sx={{ flex: 1 }}>{addr.direccion}</Typography>
              <Box display="flex" gap={1}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditAddress(index)}
                >
                  Editar
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteAddress(index)}
                >
                  Eliminar
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Fade>
  </Modal>
  
  );
};


export default ModalAdress