import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
function Product() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios("https://6407573a862956433e6caad1.mockapi.io/store_api/").then(
      (result) => {
        setListProduct(result.data);
      }
    );
  });
  return (
    <div>
      <Row xs={1} md={3} className="g-4" style={{ marginLeft: "50px" }}>
        {listProduct.map((item) => (
          <Col>
            <Card
              className="cardWisata"
              style={{
                width: "16rem",
                height: "18rem",
                alignItems: "center",
                marginTop: "20px",
                borderRadius: "15px 15px 15px 15px",
              }}
            >
              {/* <Card.Img
                style={{ borderRadius: "10px 10px 0px 0px" }}
                variant="top"
                src={item.fotoProduk}
                alt="wisata"
              /> */}
              <Card.Body>
                <button
                  className="btnName"
                  // onClick={() => handleDetail(item._id)}
                >
                  {item.namaProduk}
                </button>
                <p style={{ marginTop: "10px", fontSize: "13px" }}>
                  {item.hargaBeli}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Product;
