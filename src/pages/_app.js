
import { StructureLayout } from "@/layout/StructureLayout";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>  
      <StructureLayout>
      <Component {...pageProps} />

      </StructureLayout>
    </>
  );
}
