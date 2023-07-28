import { Grid } from "@mui/material";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Grid
      spacing={2}
      container
      justify="space-between"
      alignContent="space-between"
      flexDirection="row"
    >
      <Grid item xs={12} md={6}>
        <Image width={500} height={500} src="/assets/images/section.png" />
      </Grid>
      <Grid item xs={12} md={6}>
        <p>
          <span style={{ color: "#34C840", fontSize: "6rem" }}>Unveiling</span>
          <br></br>{" "}
          <span style={{ fontSize: "3rem" }}>
            The Restaurant's Menu with a{" "}
          </span>
          <br></br>
          <span style={{ fontSize: "3rem" }}>Simple Scan!</span>
        </p>
      </Grid>
    </Grid>
    // <div style={sectionStyle}>
    //   <div>
    //     <Image width={500} height={500} src="/assets/images/section.png" />
    //   </div>
    //   <div>
    //     <p>
    //       <span style={{ color: "#34C840", fontSize: "6rem" }}>Unveiling</span>
    //       <br></br>{" "}
    //       <span style={{ fontSize: "3rem" }}>
    //         The Restaurant's Menu with a{" "}
    //       </span>
    //       <br></br>
    //       <span style={{ fontSize: "3rem" }}>Simple Scan!</span>
    //     </p>
    //   </div>
    // </div>
  );
};

export default AboutSection;
