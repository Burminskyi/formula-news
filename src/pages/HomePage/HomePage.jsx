import { Container } from "@mui/material";
import CustomPaginationActionsTable from "../../components/Table/Table";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { StledHomePage } from "./HomePage.styled";

const HomePage = () => {
  return (
    <StledHomePage>
      <Container>
        <FilterBar/>
        <CustomPaginationActionsTable />
      </Container>
    </StledHomePage>
  );
};

export default HomePage;
