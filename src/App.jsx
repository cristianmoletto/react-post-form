import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [check, setCheck] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const authorData = {
      name: name,
      title: title,
      content: content,
      check: check,
    };
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts ",authorData)
      .then((resp) => {
        alert("Il ticket è stato registrato con id " + resp.data.id);
        setName("");
        setTitle("");
        setContent("");
        setCheck(false);
      });
  }
  

  return (
    <>
      <div className="container text-center">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col my-2">
            <h1 className="my-4">Form aggiunta autore</h1>
            <div className="col">
              <label htmlFor="name">Autore</label>
              <input
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
                value={content}
                onChange={(event) => setContent(event.target.value)}
                rows="3"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="col my-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={check}
                onChange={(event) => setCheck(event.target.checked)}
                id="check"
              />
              <label className="form-check-label px-2" htmlFor="check">
                Pubblicare articolo?
              </label>
              <div className="col">
                <button className="btn btn-primary btn-lg my-4 px-5" type="submit">
                  Aggiungi articolo
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
