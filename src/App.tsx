import Footer from "@/components/footer";
import Header from "@/components/header";
import IngredientsManager from "@/components/ingredients-manager";
import Main from "@/components/main";

export default function App() {
  return (
   <>
    <Header title="Figar"/>
    <Main>
      {/* <SearchInput /> */}
      <IngredientsManager />
    </Main>
    <Footer />
   </>
  )
}
