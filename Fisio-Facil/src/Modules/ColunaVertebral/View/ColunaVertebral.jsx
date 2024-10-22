import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Usuarios/View/Login.css";

const ColunaVertebral = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
        <div
          className="text-center"
          style={{
            backgroundColor: "#d4f1a1",
            color: "#000000",
            borderRadius: "20px",
            cursor: "pointer",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          COLUNA VERTEBRAL
        </div>
      <div className="container text-center mt-5">

        {/* Lista dos membros */}
        <div className="d-flex flex-column align-items-center">
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/ombro")}
          >
            CERVICAL
          </div>
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/cotovelo")}
          >
            TORÁCICA
          </div>
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/punho")}
          >
            LOMBAR
          </div>
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/mao")}
          >
            SACRAL
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColunaVertebral;