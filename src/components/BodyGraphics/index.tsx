import { Container, Box, Grid, GridItem } from '@chakra-ui/react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import React from 'react';
import Temperatura from './components/Temperatura';
import Altitude from './components/Altitude';

const dataTemp = [
    {Temperatura: '1', time: 1},
    {Temperatura: '2', time: 2},
    {Temperatura: '3', time: 2},
    {Temperatura: '4', time: 3},
    {Temperatura: '3', time: 4},
    {Temperatura: '1', time: 5},
    {Temperatura: '4', time: 6},
  ];

const BodyGraphics = () => {
  
    return (
        <>
            <Grid gap={1} style={{ display: 'flex' }}>
                <GridItem w='100%' h='10' bg='blue'>
                    <Temperatura data={dataTemp} />
                </GridItem>
                <GridItem w='100%' h='10' bg='blue'>
                    <Altitude data={dataTemp} />
                </GridItem>
            </Grid>
        </>
    );
};

export default BodyGraphics;