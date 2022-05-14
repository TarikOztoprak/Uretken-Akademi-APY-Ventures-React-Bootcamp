import axios from "axios";
import { useState, useLayoutEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./App.css";
import Loader from "./Components/Loader";

function App() {
  const [cryptoData, setCryptoData] = useState(["data1", "data2", "data3"]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCoinImage, setSelectedCoinImage] = useState();
  const columns = [
    { field: "name", headerName: "İsim", width: 250 },
    { field: "symbol", headerName: "Sembol", width: 250 },
    {
      field: "current_price",
      headerName: "Fiyat",
      width: 250,
    },
    {
      field: "price_change_percentage_24h",
      headerName: "Değişim",
      width: 250,
    },
  ];

  useLayoutEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(function (response) {
        setCryptoData(response.data);
        setTimeout(() => {
          setIsLoaded(true);
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "#EEF3D2" }}>
        <span>
         
          {selectedCoinImage ? (
            <img height={30} alt="coin" src={selectedCoinImage} />
          ) : (
            <></>
          )}
           {" "}
        </span>
        Coin List
        <span>
          {" "}
          {selectedCoinImage ? (
            <img height={30} alt="coin" src={selectedCoinImage} />
          ) : (
            <></>
          )}
        </span>
      </h1>
      <div
        style={{
          height: "70vh",
          width: 1000,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {isLoaded ? (
          <DataGrid
            style={{ backgroundColor: "#EEF3D2" }}
            rows={cryptoData}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[4]}
            onRowClick={(e) => setSelectedCoinImage(e.row.image)}
            autoPageSize={true}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
