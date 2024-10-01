export default function Contact({ data, onDelete }) {
    const { id, name, number } = data;
    const handleDelete = () => {
      onDelete(id);
    };
    return (
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
