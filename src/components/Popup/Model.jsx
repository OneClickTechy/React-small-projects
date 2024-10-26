const Model = ({setBoxView, boxView}) => {
  return <div className="bg-gray-400/90 w-full min-h-screen absolute top-0 left-0 flex justify-center items-center">
    <div className="relative bg-blue-300 flex flex-col justify-center items-center max-w-2xl gap-4 animate-fadeInDown">
    <button className="self-end absolute top-0 right-0 p-0 border-0 w-4" onClick={() => setBoxView(!boxView)} >&times;</button>
    <header className="w-full text-center text-white bg-blue-950"><h1>header of the model</h1></header>
    <main><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, iusto. Quam, a ab est, quod illo dolor reiciendis laudantium dolores commodi impedit, accusantium non molestias ipsam ad culpa sunt quisquam?</p></main>
    <footer className="w-full text-center text-white bg-blue-950"><em>Footer of the model</em></footer>
    </div>
  </div>;
};

export default Model;
