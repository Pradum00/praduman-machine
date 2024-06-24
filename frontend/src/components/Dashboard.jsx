import axios from 'axios';
import { KEY_ACCESS_TOKEN, getItem } from '../utills/localStorageManager.js';

export default function Dashboard () {
  const handleClick = async () => {
    const token =   getItem(KEY_ACCESS_TOKEN);
    axios.get(`http://localhost:4000/employee/csv`,{headers:{authorization:`Bearer ${token}`}})
    .then(response => {
      const csvBlob = new Blob([response.data]);
      const blobUrl = window.URL.createObjectURL(csvBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', 'data.csv');
      document.body.appendChild(link);
      link.click();
    })
    .catch(error => {
      console.error('Error fetching CSV data:', error);
    });
  };
  return (
    <div className="text-center mt-20 text-5xl font-bold italic">
      <div>Welcome to Home Page</div>
      <div>Hello mxpertz!</div>
      <div>
        <button
          onClick={handleClick}
          className="text-lg text-white bg-blue-700 px-5 py-2 border-2 hover:border-blue-900 hover:bg-white hover:text-blue-800"
        >
          download CSV
        </button>
      </div>
    </div>
  );
}
