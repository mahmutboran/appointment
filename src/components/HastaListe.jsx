import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrashAlt } from "react-icons/fa";
const HastaListe = ({ item, handleDelete, handleCompleted }) => {
  return (
    <div>
      <Card
        bg={
          item.doktor === "DR Ayse Okur"
            ? "warning"
            : item.doktor === "DR Fatma Adil"
            ? "info"
            : item.doktor === "DR Oya Başar"
            ? "success"
            : "secondary"
        }
    
        style={{ width: "auto"}}
        className={item.bittiMi ? "m-5 ps-5 text-decoration-line-through": "m-5 "}
      >
        <Card.Header className="d-flex fs-4 ">
          <Container>{item.doktor}</Container>
          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            className="fs-5 "
            style={{ cursor: "pointer" }}
          />
        </Card.Header>
        <Card.Body style={{ cursor: "pointer" }} onClick={() => handleCompleted(item.id)}>
          <Card.Title> {item.day} </Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HastaListe;
