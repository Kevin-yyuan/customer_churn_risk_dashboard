import ClientTable from '@/components/ClientTable';
import ChurnRiskChart from '@/components/ChurnRiskChart';
import StatCard from '@/components/StatCard';
import clientData from '@/data.json';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h4" component="h1">
              Customer Churn Risk Dashboard
            </Typography>
            <Link href="https://github.com/Kevin-yyuan/customer_churn_risk_dashboard" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="github repository">
                <GitHubIcon sx={{ color: 'white' }} />
              </IconButton>
            </Link>
          </Box>

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