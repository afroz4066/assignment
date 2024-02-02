import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import demo from "../Assets/serviceimage.png";
const ImportantLink = () => {
  return (
    <div className=" p-10 align-middle ">
      <h1 className="text-black text-3xl md:text-4xl font-bold md:ml-20 text-center p-5">
        IMPORTANT LINKS
      </h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          {[
            "Official Login",
            "Official Login",
            "Official Login",
            "Official Login",
          ].map((name, index) => (
            <Grid
              key={name}
              xs={12}
              sm={6}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight={180}
            >
              <Avatar src={demo} size="lg" />
              <Typography sx={{ ml: 1.5 }}>{name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default ImportantLink;
