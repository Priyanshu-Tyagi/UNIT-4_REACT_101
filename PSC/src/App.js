
import './App.css';
import Card from './components/card';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [greater, setGreater] = useState(0);
  const [costfortwo, setcostfortwo] = useState("ASC");

  function getData({ page, greater, costfortwo }) {
    setLoading(true);
    setError(false);
    return fetch(
      "https://stark-shore-90477.herokuapp.com/restaurants?_limit=6" +
        `&_page=${page}&rating_gte=${greater}&_sort=costForTwo&_order=${costfortwo}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    getData({ page, greater, costfortwo });
  }, [page, greater, costfortwo]);

  return (
    <div className="App">
      <div>
        <button onClick={() => setGreater(4)}>Greater than 4</button>
        <button onClick={() => setGreater(3)}>Greater than 3</button>
        <button onClick={() => setGreater(2)}>Greater than 2</button>
        <button onClick={() => setGreater(1)}>Greater than 1</button>
        <button onClick={() => setGreater(0)}>Show All</button>
      </div>
      <div>
        <button onClick={() => setcostfortwo("DESC")}>High to Low</button>
        <button onClick={() => setcostfortwo("ASC")}>Low to High</button>
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
      </div>
      {data?.map((res) => (
        <Card key={res.id} data={res} />
      ))}
    </div>
  );
}

export default App;
