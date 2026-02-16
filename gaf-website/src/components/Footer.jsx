import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#222", color: "white", p: 3, mt: 6 }}>
      <Typography align="center">
        © Grozon Auto Forgings Pvt Ltd. All rights reserved.
      </Typography>
      <Typography align="right">
        <a
          href="https://www.linkedin.com/in/priyanka-saxena-/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 mr-1"
        >
          Website by Priyanka Saxena 
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
