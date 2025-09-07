import ClientTable from '@/components/ClientTable';
import ChurnRiskChart from '@/components/ChurnRiskChart';
import StatCard from '@/components/StatCard';
import clientData from '@/data.json';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Home() {
  const atRiskThreshold = 0.5;

  const atRiskClients = clientData.filter(c => c.churnRisk > atRiskThreshold);
  const totalMrrAtRisk = atRiskClients.reduce((acc, client) => acc + client.mrr, 0);
  const numberOfAtRiskClients = atRiskClients.length;
  const averageChurnRisk = clientData.reduce((acc, client) => acc + client.churnRisk, 0) / clientData.length;

  return (
    <main>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Customer Churn Risk Dashboard
          </Typography>

          <Grid container spacing={3} sx={{ my: 4 }}>
            <Grid item xs={12} sm={4}>
              <StatCard title="Total MRR at Risk" value={totalMrrAtRisk.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCard title="At-Risk Clients" value={numberOfAtRiskClients} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCard title="Average Churn Risk" value={`${(averageChurnRisk * 100).toFixed(2)}%`} />
            </Grid>
          </Grid>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Churn Risk Distribution
            </Typography>
            <ChurnRiskChart clients={clientData} />
          </Box>
          <Typography variant="h6" component="h2" gutterBottom>
            At-Risk Clients
          </Typography>
          <ClientTable clients={clientData} />
        </Box>
      </Container>
    </main>
  );
}