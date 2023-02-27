import React, { useState } from "react";
import Doctors from "./Doctors";
import { Container } from "react-bootstrap";
import HastaListe from "./HastaListe";
import doctors from "../helpers/doctor";
import HastaEkle from "./HastaEkle";
import data from "../helpers/data";
const Home = () => {
  const [veri, setVeri] = useState(data);
  const [selectDr, setSelectDr] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleCompleted = (id) => {
    setVeri(veri.map((e) => (e.id === id ? { ...e, bittiMi: !e.bittiMi } : e)));
  };

  const handleDelete = (id) => {
  
    setVeri(veri.filter((i) => i.id !== id))
  };
  const handleDr = (id) => {
    const result = doctors.filter((i) => i.id === id);
    setSelectDr(result);
    setToggle(!toggle);
  };
  const addHasta = (newHasta) => {
    // console.log(data);
    // data.concat(newHasta);
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
          handleCompleted={handleCompleted}
        />
      )}
    </div>
  );
};

export default Home;
