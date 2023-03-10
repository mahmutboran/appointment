import { Collapse, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrashAlt } from "react-icons/fa";
const HastaListe = ({ item, handleDelete, handleCompleted }) => {
  return (
    <div className="position-relative ">
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
        style={
          item.bittiMi
            ? { width: "auto", borderLeft: "20px solid red" }
            : { width: "auto" }
        }
        className={
          item.bittiMi ? "m-5 text-decoration-line-through opacity-25 " : "m-5 "
        }
      >
        <Card.Header className="d-flex fs-4 ">
          <Container>{item.doktor}</Container>
          
        </Card.Header>
        <Card.Body
          aria-controls="hasta-görüldü"
          aria-expanded={item.bittiMi}
          style={{ cursor: "pointer" }}
          onClick={() => handleCompleted(item.id)}
        >
          <Card.Title> {item.day} </Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
      <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            className="fs-5  position-absolute   "
            style={{ cursor: "pointer",top:10 ,right:70}}
          />
      <Collapse in={item.bittiMi}>
        <Card.Text
          id="consulted"
          className="text-danger position-absolute  top-50 start-50  translate-middle "
        >
          CONSULTED
        </Card.Text>
      </Collapse>
    </div>
  );
};

export default HastaListe;
