import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [details, setDetails] = useState(data);
  console.log(data);
  const handleClick = ()=>{
    setDetails([]);
  }
  return (    
    <>
      <section className="backgrund_color">
        <div className="card">
          <h1 className="Main_header">{details.length}Birthday Today</h1>
          {details.map((data) => {
            const{id,name,image,age} = data;
            return (
              <div key={id}>
                <div className="row">
                  <div className="col-4 customer_Image">
                    <figure className="img_container">
                      <img src={image} alt={image} />
                    </figure>
                  </div>
                  <div className="col-8 customer_details">
                    <h2>{name}</h2>
                    <p>{age}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <button onClick={handleClick} className="clearBtn">Clear All</button>
        </div>
      </section>
    </>
  );
}

export default App;
