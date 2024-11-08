
import SearchGrid from "../../components/SearchGrid";

export default function Busqueda() {
  const items = "Fontaneria"; // Example category

  return (
    <>
      <section className="mx-auto	w-3/6 mt-24 mb-28 ">
        <h1 className="text-5xl font-black pb-3">Busqueda por Categoria</h1>

        <h3 className="text-3xl font-semibold pb-3">
          Actualmente buscando en{" "}
          <span className="text-orange-500 font-black">{items}</span>
        </h3>
      </section>

      <section className="container bg-slate-100"></section>
      <SearchGrid />

    </>
  );
}
