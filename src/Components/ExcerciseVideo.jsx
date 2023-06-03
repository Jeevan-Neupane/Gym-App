import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function ExcerciseVideo({ contents, name }) {
  console.log(contents[0]);
  return (
    <div>
      <Box>
        <Typography variant="h3" mb="33px">
          Watch{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            {name}{" "}
          </span>
          exercise videos
        </Typography>
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
        >
          {contents?.map((item, id) => {
            return (
              <a
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="blank"
                rel="noreferrer"
                key={id}
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                hi
              </a>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
}

export default ExcerciseVideo;
