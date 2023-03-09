import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";

function App() {
  const [listProduct, setListProduct] = useState([]);

  // useEffect(() => {
  //   axios(
  //     "https://6407573a862956433e6caad1.mockapi.io/store_api/:endpoint"
  //   ).then((result) => {
  //     setListProduct(result.data);
  //   });
  // });
  // console.log(setListProduct);
  useEffect(() => {
    axios("https://6407573a862956433e6caad1.mockapi.io/produk").then(
      (result) => {
        console.log(result.data);
        setListProduct(result.data);
      }
    );
  }, []);
  return (
    <Row>
      {listProduct.map((item) => (
        <Col xs={1} md={3} className="col-sm-6 mb-3">
          <Card
            className="ProductItem"
            style={{ border: "2px solid rgb(42, 85, 86)" }}
          >
            <Card.Img
              style={{ borderRadius: "10px 10px 0px 0px" }}
              variant="top"
              src={item.fotoBarang}
              alt="itemProduct"
            />
            <Card.Body>
              <Card.Title>{item.namaBarang}</Card.Title>
              <Card.Text>{item.hargaBeli}</Card.Text>
              <Card.Text>{item.hargaJual}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default App;
