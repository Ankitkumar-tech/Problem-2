// src/components/Analytics.js
// import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const rawData = [
  { id: 1, name: "Raghav", value: 20 },
  { id: 2, name: "Shyam", value: 25 },
  { id: 3, name: "Raj Kumar", value: 18 },
  // Add more data as needed
];
// const sampleData = [
//   { name: "A", value: 10 },
//   { name: "B", value: 15 },
//   { name: "C", value: 8 },
//   // Add more data as needed
// ];

const Analytics = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rawData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Analytics;
