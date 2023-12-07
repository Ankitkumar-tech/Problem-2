// src/components/Data.js
// import React from 'react';
import { SpinnerCircular } from "spinners-react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
// import Shimmer from "./shimmer";

// const rawData = [
//   { id: 1, name: "Item 1", value: 20 },
//   { id: 2, name: "Item 2", value: 25 },
//   { id: 3, name: "Item 3", value: 18 },

// ];

const Data = () => {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/data");
        if (response.ok) {
          const data = await response.json();
          setAlldata(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  console.log("allData", alldata);
  return (
    <>
      {alldata.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alldata.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <SpinnerCircular />
        </>
      )}
    </>
  );
};

export default Data;
