export default (req, res) => {
  res.status(200).json([
    {
      key: "bh",
      title: "Belice",
      img:
        "/img/home/bandera-belice.png"
    },
    {
      key: "cr",
      title: "Costa Rica",
      img:
        "/img/home/bandera-costa_rica.png"
    },
    {
      key: "es",
      title: "El Salvador",
      img:
        "/img/home/bandera-el_salvador.png"
    },
    {
      key: "gt",
      title: "Guatemala",
      img:
        "/img/home/bandera-guatemala.png"
    },
    {
      key: "ho",
      title: "Honduras",
      img:
        "/img/home/bandera-honduras.png"
    },
    {
      key: "nu",
      title: "Nicaragua",
      img:
        "/img/home/bandera-nicaragua.png"
    },
    {
      key: "pm",
      title: "Panamá",
      img:
        "/img/home/bandera-nicaragua.png"
    },
    {
      key: "dr",
      title: "Rep. Dominicana",
      img:
        "/img/home/bandera-rep_dominicana.png"
    },
  ]);
};
