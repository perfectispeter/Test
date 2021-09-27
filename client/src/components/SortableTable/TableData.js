function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const TableData = [
  createData("An Event", 305, 3.7, 67, 4.3),
  createData("An Event", 452, 25.0, 51, 4.9),
  createData("An Event", 262, 16.0, 24, 6.0),
  createData("An Event", 159, 6.0, 24, 4.0),
  createData("An Event", 356, 16.0, 49, 3.9),
  createData("An Event", 408, 3.2, 87, 6.5),
  createData("An Event", 237, 9.0, 37, 4.3),
  createData("An Event", 375, 0.0, 94, 0.0),
  createData("An Event", 518, 26.0, 65, 7.0),
  createData("An Event", 392, 0.2, 98, 0.0),
  createData("An Event", 318, 0, 81, 2.0),
  createData("An Event", 360, 19.0, 9, 37.0),
  createData("An Event", 437, 18.0, 63, 4.0),
];

export default TableData;
