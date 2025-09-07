'use client';

import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';

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

type Order = 'asc' | 'desc';

export default function ClientTable({ clients }: ClientTableProps) {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof Client>('churnRisk');

  const handleRequestSort = (property: keyof Client) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedClients = [...clients].sort((a, b) => {
    if (b[orderBy] < a[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'companyName'}
                direction={orderBy === 'companyName' ? order : 'asc'}
                onClick={() => handleRequestSort('companyName')}
              >
                Company Name
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'churnRisk'}
                direction={orderBy === 'churnRisk' ? order : 'asc'}
                onClick={() => handleRequestSort('churnRisk')}
              >
                Churn Risk
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'mrr'}
                direction={orderBy === 'mrr' ? order : 'asc'}
                onClick={() => handleRequestSort('mrr')}
              >
                MRR ($)
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              Account Manager
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedClients.map((client) => (
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