import companyImage1 from "../assets/companies/1.png";
import companyImage2 from "../assets/companies/2.png";
import companyImage3 from "../assets/companies/3.png";
import companyImage4 from "../assets/companies/4.png";
import companyImage5 from "../assets/companies/5.png";

const companyImages = [
  companyImage1,
  companyImage2,
  companyImage3,
  companyImage4,
  companyImage5
];

const ImageGallery = () => (
  <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
    {companyImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt="Company that Zeroth has worked with"
        style={{
          width: "100%",
          height: "100px",
          objectFit: "contain",
          marginBottom: "40px"
        }}
      />
    ))}
  </div>
);

export default ImageGallery;
