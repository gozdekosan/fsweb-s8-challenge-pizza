import { SuccessPage } from "./Success.js";
import { Logo} from '../OrderPizza/OrderPizza';
import { Heading } from "./Success.js";
export default function Success() {
  return (
    <SuccessPage>
      <Logo src="images/iteration-1-images/logo.svg" alt="Logo" />
      <Heading>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</Heading>
    </SuccessPage>
  );
}