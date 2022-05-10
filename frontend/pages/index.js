import Head from "next/head";
import { Box, Text, Select, Input } from "@chakra-ui/react";
import SearchCard from "../component/SearchCard";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Home() {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  const [search5, setSearch5] = useState("");
  const [allData, setAllData] = useState([]);
  const getInfo = async () => {
    try {
      const body ={
        "title":search1,
        "Date":search2,
        "tag":search3,
        "language":search4,
      }
      let all = await axios.post(
        `http://localhost:3001/`,
        body
      );
      setAllData(all.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getInfo()
  }, [search1, search2, search3, search4, search5])

  return (
    <Box w="100%" h={"100%"} my={"1%"}>
      <Box mx={"20%"}>
        <Text fontSize={26}>ระบบรับสมัครนักศึกษาระดับปริญญาตรี</Text>
        <Box w={"auto"}>
          <Text fontSize={30} bg={"#FCF8E8"} w={"auto"} color={"#FF5F00"}>
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </Text>
        </Box>
        <Box bg={"brown"} py={1} mt={3}>
          <Text align={"center"} color={"snow"}>
            ค้นหาหลักสูตรที่เปิด
          </Text>
          <Box mx={"2%"} mb={"2%"} bg={"snow"} h={"100%"} p={5}>
            <Box display="flex" flexDirection="row">
              <Box display="flex" flexDirection="column" w={"100%"}>
                <Text color={"black"}>ค้นหา 'คณะ'</Text>
                <Select
                  placeholder="Select option"
                  borderColor="black"
                  color={"black"}
                  w={"80%"}
                  onChange={(e)=>{setSearch1(e.target.value)}}
                >
                  <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
                  <option value="บริหารธุรกิจ">บริหารธุรกิจ</option>
                  <option value="ทันตแพทยศาสตร์">ทันตแพทยศาสตร์</option>
                  <option value="อุตสาหกรรมการบินนานาชาติ">อุตสาหกรรมการบินนานาชาติ</option>
                  <option value="สถาปัตยกรรม ศิลปะและการออกแบบ">สถาปัตยกรรม ศิลปะและการออกแบบ</option>
                  <option value="นวัตกรรมการผลิตขั้นสูง">นวัตกรรมการผลิตขั้นสูง</option>
                </Select>
              </Box>
              <Box display="flex" flexDirection="column" w={"100%"}>
                <Text color={"black"}>ค้นหา 'รอบรับสมัคร'</Text>
                <Select
                  placeholder="Select option"
                  borderColor="black"
                  color={"black"}
                  w={"80%"}
                  onChange={(e)=>{setSearch2(e.target.value)}}
                >
                  <option value=" ( 1 / 2565 ) รอบ - - Direct Admission 3 (International
                    Program)">
                    ( 1 / 2565 ) รอบ - - Direct Admission 3 (International
                    Program)
                  </option>
                  <option value=" ( 1 / 2565 ) รอบ - - Direct Admission 2 (International
                    Students Only)">
                    ( 1 / 2565 ) รอบ - - Direct Admission 2 (International
                    Students Only)
                  </option>
                  <option value="( 1 / 2565 ) รอบ - - Direct Admission 2 (International
                    Program)">
                    ( 1 / 2565 ) รอบ - - Direct Admission 2 (International
                    Program)
                  </option>
                  <option value="( 1 / 2565 ) รอบ 2 - โครงการอาชีวะพรีเมี่ยม รอบ 2">
                    ( 1 / 2565 ) รอบ 2 - โครงการอาชีวะพรีเมี่ยม รอบ 2
                  </option>
                </Select>
              </Box>
              <Box display="flex" flexDirection="column" w={"100%"}>
                <Text color={"black"}>ค้นหา 'โครงการ'</Text>
                <Select
                  placeholder="Select option"
                  borderColor="black"
                  color={"black"}
                  bg={"snow"}
                  w={"80%"}
                  onChange={(e)=>{setSearch3(e.target.value)}}
                >
                  <option value="โครงการ Direct Admission 3 (School of Engineering)">
                    โครงการ Direct Admission 3 (School of Engineering)
                  </option>
                  <option value="โครงการ Direct Admission 3 (School of Engineering) Unified
                    Bachelor's & Master's Degree Program (KMITL - CMKL)">
                    โครงการ Direct Admission 3 (School of Engineering) Unified
                    Bachelor's & Master's Degree Program (KMITL - CMKL)
                  </option>
                  <option value="โครงการ Direct Admission 3 (School of Engineering) Unified
                    Bachelor's & Master's Degree Program (KMITL - AIT)">
                    โครงการ Direct Admission 3 (School of Engineering) Unified
                    Bachelor's & Master's Degree Program (KMITL - AIT)
                  </option>
                  <option value="โครงการ Direct Admission 3,Business Administration Global
                    Entrepreneurship (KMITL Business School)">
                    โครงการ Direct Admission 3,Business Administration Global
                    Entrepreneurship (KMITL Business School)
                  </option>
                  <option value="โครงการ Direct Admission3 Doctor of Dental Surgery Program
                    (International Program)">
                    โครงการ Direct Admission3 Doctor of Dental Surgery Program
                    (International Program)
                  </option>
                  <option value="โครงการ Direct Admission 3,Business Administration (KMITL
                    Business School)">
                    โครงการ Direct Admission 3,Business Administration (KMITL
                    Business School)
                  </option>
                </Select>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" mt={10}>
              <Box display="flex" flexDirection="column" w={"100%"}>
                <Text color={"black"}>ค้นหาหลักสูตร ไทย / นานาชาติ</Text>
                <Select
                  placeholder="Select option"
                  borderColor="black"
                  color={"black"}
                  w={"27%"}
                  onChange={(e)=>{setSearch4(e.target.value)}}
                >
                  <option value="หลักสูตรไทย">หลักสูตรไทย</option>
                  <option value="หลักสูตรนานาชาติ">หลักสูตรนานาชาติ</option>
                </Select>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" mt={10}>
              <Box display="flex" flexDirection="column" w={"100%"}>
                <Text color={"black"}>
                  คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ)
                  [ระบบจะค้นจากชื่อคณะ,หลักสูตร]
                </Text>
                <Input
                  placeholder="Basic usage"
                  borderColor="black"
                  color={"black"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box bg={"snow"} h={10}>
          <Text color="black" pt={2}>
            {`ผลการค้นหา : ${allData.length} รายการ`}
          </Text>
        </Box>
        <Box bg={"#E7B2A5"} px={6} py={2}>
          <Text fontWeight="bold" color="black" fontSize={20}>
            กทม.
          </Text>
          <Text color={"red"}>หมายเหตุ</Text>
          <Text color={"red"}>
            กรณีเปลี่ยนสาขาวิชาที่สมัครหรืออันดับหรือโครงการที่สมัคร
            ต้องสมัครใหม่ และชำระเงินค่าสมัครใหม่เท่านั้น โดยสถาบันฯ
            จะถือว่าการสมัครครั้งสุดท้ายที่มีการชําระเงินค่าสมัครเรียบร้อยแล้วเป็นครั้งที่ต้องการเข้าสอบ
            และครั้งที่สมัครก่อนหน้าจะถือเป็นโมฆะ
            แม้ว่าจะชําระเงินค่าสมัครแล้วก็ตาม
          </Text>
          {
            allData.map((data)=>{
              return(
                <SearchCard data={data}></SearchCard>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  );
}
