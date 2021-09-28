 
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import { ButtonGroup, Button, Spinner } from 'react-bootstrap';
import './App.css';
 
function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=4444210250cf4ddc814444c4d934ed53')
    .then(res => res.json())
    .then(data => setNews(data));
  }, [])

  return (
    <div className="App">
      <Button variant="primary">Hello me</Button>
      <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
     
     
   </div>
  );
}

export default App;
