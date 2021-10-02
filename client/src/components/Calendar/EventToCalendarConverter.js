function EventToCalendarConverter(dataFromBackend){

        var convertedData = []; 
        console.log("dataFromBackend: ",dataFromBackend);
        dataFromBackend.forEach((eventItem) => 
            {var convertedEvent = {
                id: eventItem._id,
                title: eventItem.event_title,
                start: new Date(eventItem.event_start_date_time),
                end: new Date(eventItem.event_end_date_time),
                creator: eventItem.event_creator_id,
                categories: eventItem.event_category.split(","),
                desc: eventItem.event_description
            };
            convertedData.push(convertedEvent);
        }
            );

    console.log("Data converted: ",convertedData);
    return convertedData;
};

export default EventToCalendarConverter;