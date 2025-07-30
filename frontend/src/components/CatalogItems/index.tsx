import { Container, Typography } from "@mui/material";
import Table from "../Table";

const CatalogItems = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Catalog Items
      </Typography>
      <Table />
    </Container>
  );
};

export default CatalogItems;
