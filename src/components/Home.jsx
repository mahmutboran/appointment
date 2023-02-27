import React, { useState } from "react";
import Doctors from "./Doctors";
import { Container } from "react-bootstrap";
import HastaListe from "./HastaListe";
import doctors from "../helpers/doctor";
import HastaEkle from "./HastaEkle";
const Home = () => {
  const [veri, setVeri] = useState([
    {
      id: 1,
      text: "Yavuz Selim",
      day: "Dec 12th at 2:30pm",
      bittiMi: false,
      doktor: "DR Ayse Okur",
    },
    {
      id: 2,
      text: "Mihrimah Sultan",
      day: "Dec 13th at 1:30pm",
      bittiMi: true,
      doktor: "DR Fatma Adil",
    },
    {
      id: 3,
      text: "Fatih Mehmet",
      day: "Dec 14th at 3:00pm",
      bittiMi: false,
      doktor: "DR Oya Başar",
    },
    {
      id: 4,
      text: "İpek Bilir",
      day: "Dec 12th at 2:30pm",
      bittiMi: false,
      doktor: "DR Ahmet Bilen",
    },
    {
      id: 5,
      text: "Haluk Yilmaz",
      day: "Dec 13th at 1:30pm",
      bittiMi: true,
      doktor: "DR Ahmet Bilen",
    },
    {
      id: 6,
      text: "Ayşe Güler",
      day: "Dec 14th at 3:00pm",
      bittiMi: false,
      doktor: "DR Oya Başar",
    },
  ]);
  const [selectDr, setSelectDr] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleCompleted = (id) => {
    setVeri(
      veri.map((e) => (e.id === id ? { ...e, bittiMi: !e.bittiMi } : e))
    );
  };

  const handleDelete = (id) => {
    const result = veri.filter((i) => i.id !== id);
    setVeri(result);
  };
  const handleDr = (id) => {
    const result = doctors.filter((i) => i.id === id);
    setSelectDr(result);
    setToggle(!toggle);
  };
  const addHasta = (newHasta) => {
    setVeri([...veri, newHasta]);
  };
  return (
    <div>
      <h1 className="text-danger">KRANKENHAUS</h1>
      <Container className="d-flex justify-content-evenly">
        {doctors.map((dr) => {
          return toggle && <Doctors handleDr={handleDr} dr={dr} key={dr.id} />;
        })}
      </Container>
      <Container>
        {veri.map((item) => {
          return (
            toggle && (
              <HastaListe
                item={item}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
                key={item.id}
              />
            )
          );
        })}
      </Container>
      {!toggle && (
        <HastaEkle
          addHasta={addHasta}
          selectDr={selectDr}
          veri={veri}
          handleDelete={handleDelete}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default Home;
