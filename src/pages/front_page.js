import * as React from 'react';
import {Box, Button, Grid} from "@mui/material";
import MapEsriView from "../components/map/map_esri_view";

const FrontPage = () => {
    const mapParam = {
        basemap: "satellite",
        center: [-118, 34],
        zoom: 5
    }

    const onClickUpdateBasemap = () => {
        mapParam.basemap = "topo-vector"
    }

    return (
        <Grid container spacing={1} style={{height: "100%"}}>
            <Grid item xs={3}>
                <Button variant="contained" onClick={onClickUpdateBasemap}>Update Basemap</Button>
            </Grid>
            <Grid item xs={9} style={{backgroundColor: "red"}}>
                <Box style={{width: '100%', height: '100%'}}>
                    <MapEsriView mapParam={mapParam}/>
                </Box>
            </Grid>
        </Grid>
    );
};

export default FrontPage;