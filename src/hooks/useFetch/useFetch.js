import axios from 'axios';
import {useState, useEffect} from 'react';

function useFetch(url) {
  const [data, SetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      SetData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return {data, loading, error};
}
export default useFetch;
