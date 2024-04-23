import { useState } from "react";

export default function BotonEjemplo(props: any) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      {modalVisible && (
        <div
          onClick={() => {
            setModalVisible(false);
          }}
          style={{
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,.5)",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              width: "70vw",
              height: "70vh",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              padding: "50px",
            }}
          >
            {props.ejemplo?.descripcion}
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setModalVisible(true);
        }}
      >
        {props.ejemplo?.titulo}
      </button>
    </>
  );
}
