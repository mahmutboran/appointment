import React, { useState } from "react";
import Doctors from "./Doctors";
import HastaListe from "./HastaListe";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import uuid from "react-uuid";

const HastaEkle = ({ selectDr, veri, handleDelete, addHasta,setToggle,toggle }) => {
  const result = veri.filter((i) => i.doktor === selectDr[0].doktor);
  const [startDate, setStartDate] = useState(new Date());
  const [newHasta, setNewHasta] = useState({
    id: uuid(),
    text: "Yavuz Selim",
    day: startDate.toDateString(),
    bittiMi: false,
    doktor: selectDr[0].doktor,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addHasta(newHasta);
    setNewHasta({
      id: uuid(),
      text: "",
      day: startDate.toDateString(),
      bittiMi: false,
      doktor: selectDr[0].doktor,
    });
    e.target.reset();
  };
  return (
    <div className="d-flex justify-content-around p-5">
      <Container className="w-50">
        <Doctors dr={selectDr[0]} />
        <Form
          onSubmit={handleSubmit}
          className=" fs-5 text-start border p-2 mt-5"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hasta Bilgileri</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name und Vorname"
              required
              value={newHasta.text}
              onChange={(e) =>
                setNewHasta({ ...newHasta, text: e.target.value })
              }
            />
          </Form.Group>
          <DatePicker
            selected={startDate}
            required
            onChange={(date) => setStartDate(date)}
          />
          <Button
            variant={
              selectDr[0].doktor === "DR Ayse Okur"
                ? "warning"
                : selectDr[0].doktor === "DR Fatma Adil"
                ? "info"
                : selectDr[0].doktor === "DR Oya Başar"
                ? "success"
                : "secondary"
            }
            type="submit"
            className="mt-2"
          >
            {selectDr[0].doktor}{" "}
            <Form.Text className="text-danger fs-3">
              {" "}
              için Kayıt Oluştur
            </Form.Text>
          </Button>
        </Form>
        <Button variant="danger" className="mt-2" onClick={()=>{setToggle(!toggle)}}>
          Ana Sayfa
        </Button>
      </Container>
      <Container>
        {result.map((item) => {
          return (
            <HastaListe item={item} handleDelete={handleDelete} key={item.id} />
          );
        })}
      </Container>
    </div>
  );
};

export default HastaEkle;
