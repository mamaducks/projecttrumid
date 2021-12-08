import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Typography>Projects</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Project Manager (2 Badges)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Project A and time
          </Typography>
          <Typography>
            Project C and time
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Project Architect (1 Badge)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Project B and time
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Web Developer (1 Badge)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Project D and time
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}