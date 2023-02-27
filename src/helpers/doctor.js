import uuid from "react-uuid";
import ayse from "./Ayse.png";
import fatma from "./Fatma.png";
import oya from "./Oya.png";
import ahmet from "./ahmet.png";
const Doctors = [
    {
      id: uuid(),
      image: ayse,
      doktor: "DR Ayse Okur",
    },
    {
      id: uuid(),
      image: fatma,
      doktor: "DR Fatma Adil",
    },
    {
      id: uuid(),
      image: oya,
      doktor: "DR Oya Başar",
    },
    {
      id: uuid(),
      image: ahmet,
      doktor: "DR Ahmet Bilen",
    },
  ];
  export default Doctors;