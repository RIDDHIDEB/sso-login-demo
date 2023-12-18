import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box, Stack} from '@mui/material';
import AddUserModal from '../modal/AddUserModal';
import EditModal from '../modal/EditModal';
import { fetchInitialData, deleteRowData, addNewData, editRowData} from '../../apis/ProductApi';
import MyButton from '../Buttons/Button';
import './Table.css';
import Button from '@mui/material/Button';

function Table() {

    const [rows,setRows] = useState([]);
    const [editRow,setEditRow] = useState(null);
    const [title, setTitle] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);    
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [newUser, setNewUser] = useState({
      title: '',
      price: '',
      discountPercentage: '',
      rating: '',
    });

    const handleOpenAddDialog = () => setAddDialogOpen(true);
    const handleCloseAddDialog = () => setAddDialogOpen(false);

    const handleOpenEditDialog = (id) => {      
      setEditDialogOpen(true);
      handleEdit(id);
      console.log(id);
    };
    const handleCloseEditDialog = () => setEditDialogOpen(false);


        useEffect(()=>{
        const fetchData = async()=>{
          try{
            const data = await fetchInitialData();
            const mappedData = data.map((item)=>({
              id:item.id,
              title:item.title,
              price:item.price,
              discountPercentage:item.discountPercentage,
              rating:item.rating,
              stock:item.stock,
            }));
            setRows(mappedData);
          }catch (error) {
            console.error("Error:", error);
          }
        };
        fetchData();
      },[]);

      const columns = [
  
        {field:'id', headerName:'ID',headerAlign:"center",align:"center", width: 150},
        {
          field: 'title',
          headerName: 'Title',
          headerAlign:"center",
          align:"center",
          width: 200,
        },
        {
          field: 'price',
          headerName: 'Price',
          headerAlign:"center",
          align:"center",
          width: 200,
        },
        { field: 'discountPercentage', headerName: 'Discount %',headerAlign:"center",align:"center", width: 200 },
        { field: 'rating', headerName: 'Rating',headerAlign:"center",align:"center", width: 200 },
        { field: 'action', headerName: 'Action',headerAlign:"center",align:"center", width: 230, renderCell:(params)=>(
          <div className='table-button'>
          <MyButton variant='contained' label='Edit' onClick={()=>handleOpenEditDialog(params.row.id)}/>
          <MyButton variant='contained' label='Delete' color='error' onClick={() => handleDelete(params.row.id)}/>
          </div>
        ) },
      ];
      
      const handleDelete = async (id) => {
        const deleteUrl = await deleteRowData(id);
        console.log(deleteUrl);
        const updatedData = rows.filter((item) => item.id !== id);
        console.log(updatedData);
        setRows(updatedData);
        setRowToDelete(true);
      };

      const handleEdit =  (id) => {
        console.log(id);
        const editedRow = rows.find((row) => row.id === id);
        setEditMode(true);
        setEditRow(editedRow);
        console.log(id);
        setSelectedUser(id);
       
      };

      const handleEditSave = async () => {
        console.log(selectedUser);
        const updatedData = await editRowData(selectedUser,editRow); // Pass the correct 'id'
        console.log(updatedData);
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === selectedUser ? updatedData : row))
        );
        setEditMode(false);
        setEditDialogOpen(false);
      };

      const settingEditedValue = (title)=>{
        setTitle(title);
      }
      
      const handleNewUserChange = (field, value) => {
        setNewUser((prevUser) => ({
          ...prevUser,
          [field]: value,
        }));
      };
    
      const handleSaveNewUser = async() => {
        const addUrl = await addNewData();
        console.log(addUrl);
        const newUserId = rows.length +1;
        const newUserData = {
          id: newUserId,
          title: newUser.title,
          price: newUser.price,
          discountPercentage: newUser.discountPercentage,
          rating: newUser.rating,
        };
        setRows((prevData) => [...prevData, newUserData]);
        setNewUser({
          title: '',
          price: '',
          discountPercentage: '',
          rating: '',
        });
        setAddDialogOpen(false);
      };

  return (
    <>
    <div className='main-nav'>
      <div className='nav-heading'><Typography variant='h3'  gutterBottom>Home</Typography></div>
      <div className='logout-button'>
        <Button variant='contained'>LogOut</Button>
      </div>
    </div>

    <div className='scroll'>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Typography variant='h3'  gutterBottom>Data Table</Typography>
    </div>
    <Box sx={{
      height:"100%",
      width:"70%",
      marginLeft: "15%"
    }}>
    <div style={{display:"flex",justifyContent:"flex-end"}}>
    <Stack direction="row" spacing={1}>
    <MyButton
        variant='contained'
        onClick={handleOpenAddDialog}
        label='Add User'
      />
    </Stack>
    </div>
    {/* <div className='table_container'> */}
      {/* <div> */}
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 10 },
            },
            }}
            pageSizeOptions={[10,20,30]}>
          </DataGrid> 
        {/* </div>   */}
      {/* </div> */}
  </Box>
  </div>

    <EditModal
        open={editDialogOpen}
        handleClose={handleCloseEditDialog}
        handleSave={handleEditSave}
        editRow={editRow}
        handleEdit={handleEdit}
        settingEditedValue={settingEditedValue}
      />

    <AddUserModal
        open={addDialogOpen}
        handleClose={handleCloseAddDialog}
        handleSaveNewUser={handleSaveNewUser}
        handleNewUserChange={handleNewUserChange}
        newUser={newUser}
      />

    </>
  )
}

export default Table;
