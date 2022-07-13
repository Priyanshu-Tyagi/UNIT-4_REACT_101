import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Layout(){
    const items = new Array(12).fill(0).map((a, i) => i + 1);
    console.log(items);
    
    return (
        <Box>
            <SimpleGrid
                columns={{
                base: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
                "2xl": 6
                }}
            >
                {items.map((item) => (
                    <Box key={item}> {item} </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}