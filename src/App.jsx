import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container text-center">
        <form className="row">
          <div className="col my-2">
            <h1 className="my-4">Form aggiunta autore</h1>
            <div className="col">
              <label htmlFor="name">Autore</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                autoComplete="off"
              />
            </div>
            <div className="col my-2">
              <label htmlFor="titolo">Titolo del post</label>
              <input
                name="titolo"
                type="text"
                className="form-control"
                id="titolo"
                autoComplete="off"
              />
            </div>
            <div className="col my-2">
              <label className="form-label" htmlFor="description">
                Testo del post
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="col my-2">
            <input className="form-check-input" type="checkbox" value="" id="check"/>
            <label className="form-check-label px-2" htmlFor="check">
              Pubblicare articolo?
            </label>
            <div className="col">
              <button className="btn btn-primary btn-lg my-4 px-5">Aggiungi articolo</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
