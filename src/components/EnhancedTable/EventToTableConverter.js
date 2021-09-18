function EventToTableConverter(inputData) {
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
  inputData[0].map((event) => {
    rows.push(
      createData(
        event.title,
        event.start.toUTCString(),
        event.end.toUTCString(),
        event.start.getTime(),
        event.categories ? event.categories.join(", ") : "",
        event.location ? event.location : "",
        event.isActive ? event.isActive : "true"
      )
    );
  });
  return rows;
}

export default EventToTableConverter;
