function UserToTableConverter(inputData) {
  function createData(
    event_name,
    start_Date,
    end_Date,
    event_time,
    category,
    location,
    active_status
  ) {
    return {
      event_name,
      start_Date,
      end_Date,
      event_time,
      category,
      location,
      active_status,
    };
  }

  var rows = [];
  if (inputData) {
    inputData.map((user) => {
      rows.push(
        createData(
          user._id,
          user.email,
          user.name,
          user.isAdmin.value,
          "true", //TODO user.authorised
          "true", //TODO user.visible
          1 //TODO events.filter(e => e.creator === user.id).toString
        )
      );
    });
  }
  console.log("output: ", rows);
  return rows;
}

export default UserToTableConverter;
