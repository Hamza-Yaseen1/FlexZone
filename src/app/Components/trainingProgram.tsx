function TranningProgram() {
  return (
    <>
      <h1 className="pl-6 text-3xl font-bold">Tranning Program</h1>
      <div className="p-6 flex flex-col lg:flex-row">
        <div className="card1 rounded h-auto gap-16">
          <img src="/images/about-1.jpg" alt="" className="rounded" />
        </div>

        <div className="card2-1 ml-3 rounded h-auto">
          <img src="/images/about-2.jpg" alt="" className="rounded" />

          <div className="card3 flex flex-col lg:flex-row pt-3 gap-4">
            <div className="card2-2 rounded h-auto">
              <img src="/images/about-3.jpg" alt="" className="rounded" />
            </div>
            <div className="card2-3 rounded h-auto">
              <img src="/images/about-4.jpg" alt="" className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TranningProgram;
