import { Button, Container, Typography } from "@mui/material";
import "./Table.css";

export default function Table() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <Typography variant="h4" gutterBottom className="table-header">
        Hello from Material UI
      </Typography>
      <Button variant="contained" color="primary">
        Press Me
      </Button>
    </Container>
  );
}
