import Footer from "@/components/footer";
import Header from "@/components/header";
import IngredientsManager from "@/components/ingredients-manager";
import { LoginForm } from "@/components/login-form";
import Main from "@/components/main";
import RecipeList from "@/components/recipe-list ";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function App() {
  const { isAuthenticated  } = useSelector((state: RootState) => state.auth)
  
  return (
    <>
      {!isAuthenticated 
        ? <LoginForm />
        : <>
          <Header title="Figar"/>
          <Main>
            {/* <SearchInput /> */}
            <IngredientsManager />
            <RecipeList />
          </Main>
          <Footer />
        </> }
    </>
  )
}
