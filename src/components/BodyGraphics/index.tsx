import { Container, Box } from '@chakra-ui/react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from 'react';

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
            <Container width="100%" bg="blue">
                <Box style={{ marginTop: '150px', backgroundColor: '#ffffff' }}>
                    <LineChart
                        width={300}
                        height={150}
                        data={dataTemp}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                        <Line
                            type='monotone'
                            dataKey='time'
                            stroke='#000000'
                            activeDot={{r: 8}}
                        />
                        {/* <Tooltip/> */}
                        <YAxis />
                        {/* <XAxis dataKey='Temperatura'/>
                        <Legend /> */}
                    </LineChart>
                </Box>
            </Container>
        </>
    );
};

export default BodyGraphics;