import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'; // Import Avatar for logo
import CreditCardIcon from '@mui/icons-material/CreditCard'; // Example billing icon
import { useTheme } from '@mui/material/styles';
import Form21 from './form/Form21';
import Form22 from './form/Form22';

const CenteredTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Avatar style={{ marginRight: '10px', backgroundColor: theme.palette.primary.main }}>
          <CreditCardIcon style={{ color: theme.palette.getContrastText(theme.palette.primary.main) }} /> {/* Placeholder billing icon */}
        </Avatar>
        <Typography variant="h4" gutterBottom style={{ color: theme.palette.primary.main }}>
          Automobile Web App
        </Typography>
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        centered
      >
        <Tab label={<Typography variant="body1">Form 21</Typography>} aria-label="Form 21" />
        <Tab label={<Typography variant="body1">Form 22</Typography>} aria-label="Form 22" />
      </Tabs>
      {/* Conditional rendering of forms based on selected tab */}
      {value === 0 && <Form21 />}
      {value === 1 && <Form22 />}
    </div>
  );
}

const IconTabs = () => (
  <div style={{ marginTop: '50px' }}>
    <CenteredTabs />
  </div>
);

export default IconTabs;
