const AboutInfo = () => {
  return (
    <section className="container pb-24">
      <div className="flex lg:flex-row items-start justify-between gap-6">
        <div className="flex flex-col max-w-96 items-start justify-between gap-8">
          <p className="max-w-96 text-primaryGray">
            Lebih dari 12 ribu peluang kerja dan magang yang berhasil kami
            fasilitasi.
          </p>
          <h4 className="font-bold max-w-80">
            12K+ Kesempatan Kerja dan Magang
          </h4>
        </div>
        <div className="flex flex-col max-w-96 items-start justify-between gap-8">
          <p className="max-w-96 text-primaryGray">
            Lebih dari 7 ribu profesional muda telah mendapat pekerjaan melalui
            CareerHub.
          </p>
          <h4 className="font-bold max-w-80">
            7K+ Profesional Muda yang Sukses
          </h4>
        </div>
        <div className="flex flex-col max-w-96 items-start justify-between gap-8">
          <p className="max-w-96 text-primaryGray">
            Dengan lebih dari 500 acara seputar panduan CV, wawancara,
            dan workshop.
          </p>
          <h4 className="font-bold max-w-80">500+ Panduan Karier</h4>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
