import { Container, Box, Grid, GridItem, Button } from '@chakra-ui/react'

const HeaderLt = () => {
    return(
        <>
        <Container maxW='1280px' bg='red' color='black' top={0} position="fixed" right={0} left={0} display="flex" flexDirection="column">
            <Box bg='tomato' w='100%' p={2} color='black' justifyContent="center" textAlign="center" fontSize="30px" fontWeight={900}> LtSat - HMI </Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={32} display="inline-flex" marginTop="30px" justifyContent="center">
                <GridItem colSpan={4} colEnd={4} bg='red' borderRadius="10px"> 
                    <Button colorScheme='teal' variant='ghost' width="200px" height="50px" color="black">
                         Sobre Nós
                    </Button> 
                </GridItem>
                <GridItem colStart={4} colEnd={4} bg='red' borderRadius="10px">
                    <Button colorScheme='teal' variant='ghost' width="200px" height="50px" color="black">
                            Dados 2022/2023
                    </Button> 
                </GridItem>
                <GridItem colStart={4} colEnd={4} bg='red' borderRadius="10px">
                    <Button colorScheme='teal' variant='ghost' width="200px" height="50px" color="black">
                                Todos os Gráficos
                    </Button> 
                </GridItem>
            </Grid>
        </Container>
        </>
    );
};

export default HeaderLt;