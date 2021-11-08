import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");
const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [Filmdirector, setFilmdirector] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = {
      id: Math.floor(Math.random() * 1000),
      name,
      description,
      image,
      Filmdirector,
      date,
      rating: +rating,
    };
    addNewMovie(newMovie);
    setModalIsOpen(false);
    setName("");
    setDescription("");
    setImage("");
    setFilmdirector("");
    setDate("");
    setRating("");
  };
  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          Add Movie{" "}
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h1>
            <h3 className="addMovie-h3">Add A Movie</h3>
          </h1>
          <form>
            <label>Movie Name :</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label>Movie Image :</label>
            <input
              type="URL"
              name="Image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />

            <label>Movie Rate :</label>
            <input
              type="number"
              name="rating"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              required
            />

            <label>Date :</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />

            <label>Movie Filmdirector :</label>
            <input
              type="text"
              name="Filmdirector"
              value={Filmdirector}
              onChange={(event) => setFilmdirector(event.target.value)}
              required
            />

            <label>Movie Description :</label>
            <textarea
              type="text"
              name="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};
export default AddMovie;
