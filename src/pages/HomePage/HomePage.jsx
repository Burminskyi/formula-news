import CustomPaginationActionsTable from "../../components/Table/Table";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { CustomContainer, StledHomePage } from "./HomePage.styled";

const HomePage = () => {

  return (
    <StledHomePage>
      <CustomContainer>
        <FilterBar />
        <CustomPaginationActionsTable />
      </CustomContainer>
    </StledHomePage>
  );
};

export default HomePage;
