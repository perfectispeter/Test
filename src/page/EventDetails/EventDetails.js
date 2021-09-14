import React from 'react';
import data from '../../asset/eventdata';
import { Card } from '@material-ui/core';


const EventDetails = (props) => {

    const { eventID } = props;

    let content = <><Card><i>Select an event to view details</i></Card></>;

        if(eventID){
            content = (<>
                    <Card>
                    <p><b>{data.at(eventID).title}</b></p>
                    <p>Created by: <a href={"/user/" + data.at(eventID).creator}>{data.at(eventID).creator}</a></p>
                    <p>When: {data.at(eventID).start.toISOString()}</p>
                    <p>{data.at(eventID).desc ? data.at(eventID).desc : <i>No description</i>}</p>
                    </Card>
            </>);
        }
    
        return content;
};

export default EventDetails;