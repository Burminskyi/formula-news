import { Container } from "@mui/material";
import CustomPaginationActionsTable from "../../components/Table/Table";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { StledHomePage } from "./HomePage.styled";
import { useSelector } from "react-redux";
import { selectIsLoading, selectTopNews } from "../../redux/News/selectors";

const HomePage = () => {
  const topNews = useSelector(selectTopNews);
  const isLoading = useSelector(selectIsLoading);

  return (
    <StledHomePage>
      <Container>
        <FilterBar />
        <CustomPaginationActionsTable />
      </Container>
    </StledHomePage>
  );
};

export default HomePage;
