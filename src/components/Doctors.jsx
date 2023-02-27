import Card from 'react-bootstrap/Card';

const Doctors = ({dr,handleDr}) => {
  return (
    <Card onClick={()=>(handleDr(dr.id))} style={{ width: '18rem', cursor:"pointer" }} className="border border-dark ">
    <Card.Img variant="top" src={dr.image} />
    <Card.Body>
      <Card.Title>{dr.doktor}</Card.Title>
    </Card.Body>
  </Card>

  );
};

export default Doctors;
