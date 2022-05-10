import React, { useEffect, useState } from "react"
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    HStack,
    Avatar,
    useColorModeValue,
    Button,
    useColorMode,
    Spinner,
    Flex,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'


const RecommendedCard = ({data}) => {
    return (
        <Button
            height={'100%'}
            width={'100%'}
            // minWidth={400}
            style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
            }}
            boxShadow={`6px 7px 10px -4px ${useColorModeValue('rgb(0 0 0 / 0.2)', '#864879')}`}
            borderRadius={10}

            bg={'snow'}
            _hover={{
            }}
            my={3}
            p={4}
        >
            <Box w={'100%'} h={'100%'} ml={3}>
                <HStack w={'100%'}>

                    {/* <Image src={item.imgUrl} alt={'logo'} width={50} height={50} /> */}

                    <Box textAlign={'left'} pt={2} pl={2}>
                        {/* <Text fontSize={18} >{item.author}</Text> */}
                        <Text fontSize={18} color='black'>{data.title}</Text>
                        
                    </Box>

                </HStack>
                <HStack>
                {data.tags.map(tag=>{
                    return(
                        <Tag bg='red' fontSize={10}>{tag}</Tag>
                    )
                })}
                </HStack>
                <Text textAlign={'left'} mt={3} noOfLines={3} fontSize={14} color='black'>{data.name}</Text>
                <Text textAlign={'left'} mt={3} noOfLines={3} fontSize={14} color='black'>{`หลักสูตร : ${data.description}`}</Text>
                <Text textAlign={'left'} mt={3} noOfLines={3} fontSize={14} color='black'>{`วันที่เปิดรับสมัคร : ${data.Date}`}</Text>
                <Text textAlign={'left'} mt={3} noOfLines={3} fontSize={14} color='black'>{data.etc}</Text>
                <Box  align='left' mt={2}>
                    <Button size='sm' colorScheme='blue' mr={2}>สมัคร</Button>
                    <Button size='sm' colorScheme='blue' mr={2}>ประกาศรับสมัคร</Button>
                    <Button size='sm' colorScheme='blue'>ข้อมูลเพิ่มเติม</Button>
                </Box>
            </Box>
        </Button>
    )
}

export default RecommendedCard