import Image from "next/image";
import IconGrid from "../components/IconGrid";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <section className="mx-auto	w-3/6 mt-24 mb-28 ">
        <h1 className="text-5xl font-black pb-3">Bienvenidos a tu Tunl</h1>
        {/* <h1 className="text-3xl font-black pb-3">
          Bienvenidos a tu <span className="text-5xl font-black pb-3">TUNL</span>{" "}
        </h1> */}
        
        <p className="text-xl	">
          Somos una plataforma de clasificados gratuita exclusiva para Honduras,
          apoyando tanto a las pequeñas y medianas empresas como a los negocios
          ya establecidos.
        </p>
      </section>

      <IconGrid />
      <Newsletter />
    </>
  );
}
