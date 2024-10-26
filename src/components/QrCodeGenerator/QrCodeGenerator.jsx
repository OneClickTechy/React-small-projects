import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [inputVal, setInputVal] = useState("");
  const [qrValue, setQrValue] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          name="qr-code"
          id="qr-code"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="enter some value"
        />
        <button
          type="button"
          onClick={() => {
            setQrValue(inputVal);
          }}
        >Generate</button>
      </div>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 320,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
};

export default QrCodeGenerator;
