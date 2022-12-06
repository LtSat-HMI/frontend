import { Container, Box } from '@chakra-ui/react'
import { Line, LineChart, YAxis } from 'recharts';
import React from 'react';

interface IAltitude {
    data: Object;
}

const Altitude: React.FC<IAltitude> = ({ data }) => {
  
    return (
        <>
            <Container width="100%" bg="blue">
                <Box style={{ marginTop: '150px', backgroundColor: '#ffffff' }}>
                    <LineChart
                        width={150}
                        height={130}
                        data={data}
                    >
                        <Line
                            type='monotone'
                            dataKey='time'
                            stroke='#000000'
                            activeDot={{r: 8}}
                        />
                        <YAxis />
                    </LineChart>
                </Box>
            </Container>
        </>
    );
};

export default Altitude;