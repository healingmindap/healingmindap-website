function AboutUs() {
  return (
    <section>
      <div className="mb-6">
        <h1 className="text-4xl text-gray-700">About Us</h1>
        <h2 className="text-gray-700">WE PROVIDE MENTAL HEALTH CARE</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div text-gray-700>MISSION</div>
          <p className="text-gray-700">
            Is to give hope to fight with psychological problems faced by
            families in generation and overcome it to lead a new life.
          </p>
        </div>
        <div>
          <div className="text-gray-700">VISION</div>
          <p className="text-gray-700">
            Provide wide range of treatment and create a better environment for
            the people suffering from mental illnesses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
