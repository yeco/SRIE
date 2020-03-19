export default (req, res) => {
  res.status(200).json([
    {
      key: "cr",
      title: "Costa Rica",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png"
    },
    {
      key: "es",
      title: "El Salvador",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/150px-Flag_of_El_Salvador.svg.png"
    }
  ]);
};
