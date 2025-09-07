"use client";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Client {
  id: number;
  companyName: string;
  churnRisk: number;
  mrr: number;
  accountManager: string;
}

interface ClientTableProps {
  clients: Client[];
}

export default function ClientTable({ clients }: ClientTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Churn Risk</TableCell>
            <TableCell align="right">MRR ($)</TableCell>
            <TableCell align="right">Account Manager</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.companyName}
              </TableCell>
              <TableCell align="right">{`${(client.churnRisk * 100).toFixed(0)}%`}</TableCell>
              <TableCell align="right">{client.mrr.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TableCell>
              <TableCell align="right">{client.accountManager}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
