import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import criminal from "../Assets/criminal.png";
export default function Criminal() {
  return (
    <>
      <div className=" bg-black bg-opacity-90 p-4 border border-white rounded-lg mx-auto my-auto mt-3 ">
        <h1 className="flex justify-center text-2xl md:text-4xl font-bold md:ml-10 text-white ">
          MOST WANTED CRIMINAL
        </h1>
        <div className="flex justify-center gap-20 p-10 flex-col md:flex-row">
          <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              sx={{ height: 180, width: 230, margin: 1, borderRadius: 2 }}
              image={criminal}
              title="criminal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jevlal Yadav
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address : Bihar Patna
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              sx={{ height: 180, width: 230, margin: 1, borderRadius: 2 }}
              image={criminal}
              title="criminal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jevlal Yadav
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address : Bihar Patna
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              sx={{ height: 180, width: 230, margin: 1, borderRadius: 2 }}
              image={criminal}
              title="criminal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jevlal Yadav
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address : Bihar Patna
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              sx={{ height: 180, width: 230, margin: 1, borderRadius: 2 }}
              image={criminal}
              title="criminal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jevlal Yadav
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address : Bihar Patna
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
