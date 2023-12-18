import axios from 'axios';
import { baseApiUrl } from '../Config';

const fetchInitialData = async () => {
    try {
      const response = await axios.get(
        `${baseApiUrl}/products`
      );
      const data = response.data.products;
      return data;
    } catch (error) {
      console.error("Error fetching initial data:", error);
      throw error; 
    }
  };

  const deleteRowData = async (id) => {
    try {
      const response = await axios.delete(
        `${baseApiUrl}/products/${id}`
      );
      console.log(response);
      const data = response.data.products;
      return data;
    } catch (error) {
      console.error("Error deleting row data:", error);
      throw error; 
    }
  };

  const editRowData = async (id,title) => {
    console.log(editRowData);
    try {
      const response = await axios.put(
        `${baseApiUrl}/products/${id}`,{
            title:title
        }
      );
      console.log(response);
      const data = response.data.products;
      return data;
    } catch (error) {
      console.error("Error editing row data:", error);
      throw error; 
    }
  };

  const addNewData = async () => {
    try {
      const response = await axios.post(
        `${baseApiUrl}/products/add`
      );
      const data = response.data.products;
      return data;
    } catch (error) {
      console.error("Error adding new data:", error);
      throw error; 
    }
  };

  export {fetchInitialData,addNewData,editRowData,deleteRowData};