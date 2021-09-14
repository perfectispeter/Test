function createHeaderCells(props){
  const cellNames = props;
  return cellNames;
}

const HeaderCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Title' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Start' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'End' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Venue' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Description' },
  ];

export default HeaderCells;