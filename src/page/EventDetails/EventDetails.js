import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../asset/eventdata';
import Header from '../../component/header/header';
import TitleCard from '../../component/titleCard/titleCard';
import { Grid, Card } from '@material-ui/core';
import { Content } from 'antd/lib/layout/layout';

const EventDetails = (props) => {

    const { eventID } = props;

    let content = <>/</>;

        if(eventID){
            content = (<>

                    <Grid alignItems="center" 
                        justifyContent="flex-start" 
                        direction="column" 
                        container spacing={2}
                        xs={3}
                        s={3}
                        md={6}
                        lg={12}
                        xl={12}
                    >
                    <Card>
                    <p><b>{data.at(eventID).title}</b></p>
                    <p>When: {data.at(eventID).start.toISOString()}</p>
                    <p>{data.at(eventID).desc ? data.at(eventID).desc : "no description"}</p>

                    </Card>
                    </Grid>
            </>);
        }
    
        return content;
};

export default EventDetails;