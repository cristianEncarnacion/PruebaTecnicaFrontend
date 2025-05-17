import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination
  } from '@mui/material';
    import { Link } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import { deleteClient, getClientes } from '../Service/Clients';
  import type { Client } from '../Interfaces/Client.d';
  import { useNavigate } from 'react-router-dom';
import { OptionsMenu } from './OptionMenu';
import { Edit02,Trash01,Eye,PlusSquare } from '@untitled-ui/icons-react';
import ModalAdress from './ModalAdress';

  
  const TableComponent = () => {
    const [rows, setRows] = useState<Client[]>([]);
    const [page, setPage] = useState<number>(0);
    const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
const [modalOpen, setModalOpen] = useState(false);

const openAddressModal = (clientId: string) => {
  console.log(clientId)
  setSelectedClientId(clientId);
  setModalOpen(true);
};

const closeAddressModal = () => {
  setModalOpen(false);
  setSelectedClientId(null);
};
   

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();
    const handleChangePage = (_: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  
    useEffect(() => {
      const fetchClientes = async () => {
        try {
          const response = await getClientes();
          setRows(response);

        } catch (error) {
          console.error("Error al obtener clientes:", error);
        }
      };
      fetchClientes();  
    }, []);
  
    const deleteClientHandler = async (id: string) => {
      try {
        await deleteClient(id);
        const updatedClients = await getClientes();
        setRows(updatedClients);
      } catch (error) {
        console.error("Error al eliminar cliente:", error);
      }
    };
    const handleEditClient = async (id: string) => {
      try {
      const clientData = rows.find((client) => client.id === id);
      if(clientData){
        navigate(`/edit-client/${id}`)
      }
   
      } catch (error) {
      console.error("Error al obtener datos del cliente:", error);
      }
    };
    const viewClientDetails = async (id: string) => {
    try {
      const clientData = rows.find((client) => client.id === id);
      if(clientData){
        navigate(`/view-client/${id}`)
      }
   
      } catch (error) {
      console.error("Error al obtener datos del cliente:", error);
      }
    }

    
   
    return (
    <>
   
  <div className="min-h-screen bg-[#f4f4f4] py-10 px-4 flex justify-center items-start">
  <div className="w-full max-w-7xl bg-white rounded-xl shadow-md p-6 animate__animated animate__fadeIn">

    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-[#003366]">Clientes registrados</h2>
      <Link
        to="/add-client"
        className="bg-[#003366] hover:bg-[#002244] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Agregar Cliente
      </Link>
    </div>

    <div className="overflow-x-auto rounded-lg shadow-sm">
      {
        rows.length === 0 ? (
          <div className="flex items-center justify-center h-48">
            <p className="text-gray-500">No hay clientes registrados.</p>
          </div>
        ) :
      
      <TableContainer component={Paper}>
        <Table className="min-w-full">
          <TableHead className="bg-[#003366]">
            <TableRow >
              {[
                "ID", "Nombre completo", "Cédula", "Fecha de nacimiento",
                "Sexo", "Estado civil", "Nacionalidad", "Acciones"
              ].map((header, idx) => (
                <TableCell key={idx} className="!text-white font-semibold text-sm">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-100 transition duration-150">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.nombre_completo}</TableCell>
                  <TableCell>{row.cedula}</TableCell>
                  <TableCell>{row.fecha_nacimiento}</TableCell>
                  <TableCell>{row.sexo}</TableCell>
                  <TableCell>{row.estado_civil}</TableCell>
                  <TableCell>{row.nacionalidad}</TableCell>
            
                  <TableCell>
                    <OptionsMenu
                      options={[
                        {
                          label: "Editar",
                          onClick: () => handleEditClient(row.id ?? ""),
                          type: "button",
                          icon: Edit02,
                        },
                        {
                          label: "Eliminar",
                          onClick: () => deleteClientHandler(row.id ?? ""),
                          type: "button",
                          icon: Trash01,
                        },
                        {
                          label: "Ver detalle",
                          onClick: () => viewClientDetails(row.id ?? ""),
                          type: "button",
                          icon: Eye,
                        },
                        {
                          label: "Agregar dirección",
                          onClick: () => openAddressModal(row.id ?? ""),
                          type: "button",
                          icon: PlusSquare,
                        },
                      ]}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      }
    </div>

    <div className="mt-4">
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>

    {selectedClientId !== null && (
      <ModalAdress
        clienteId={selectedClientId}
        open={modalOpen}
        onClose={closeAddressModal}
      />
    )}
  </div>
</div>

    </>
    );
  };
  
  export default TableComponent;
  