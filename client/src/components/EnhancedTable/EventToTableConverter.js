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

  function calculateDuration(duration) {
    const convertedDuration = (Math.floor(((duration) / (1000 * 60 * 60)) % 24));
    if(convertedDuration > 0) {
      return convertedDuration + " hour(s)";
    }
    else {
      return "";
    }
  }

  var rows = [];
  console.log("input data: ",inputData);
  if(inputData){
    inputData.map((event) => {
      rows.push(
        createData(
          event.title,
          event.start.toUTCString(),
          event.end.toUTCString(),
          calculateDuration(event.end - event.start),
          event.categories ? event.categories.join(", ") : "",
          event.location ? event.location : "",
          event.isActive ? event.isActive : "true"
        )
      );
    });
  }
  console.log("output: ",rows);
  return rows;
}

export default EventToTableConverter;
