import Fold from "./components/layout/Fold";
import Fold0Header from "./components/folds/Fold0Header";
import Fold1Main from "./components/folds/Fold1Main";
import Fold2Focus from "./components/folds/Fold2Focus";
import Fold3Acting from "./components/folds/Fold3Acting";
import Fold4Testimonials from "./components/folds/Fold4Testimonials";
import Fold8Contact from "./components/folds/Fold8Contact";
import Fold9Footer from "./components/folds/Fold9Footer";

export default function Home() {
  return (
    <>
      <Fold>
        <Fold0Header />
      </Fold>
      <Fold>
        <Fold1Main />
      </Fold>
      <Fold>
        <Fold2Focus />
      </Fold>
      <Fold>
        <Fold3Acting />
      </Fold>
      <Fold>
        <Fold4Testimonials />
      </Fold>
      <Fold>
        <Fold8Contact />
      </Fold>
      <Fold>
        <Fold9Footer />
      </Fold>

    </>
  );
}
