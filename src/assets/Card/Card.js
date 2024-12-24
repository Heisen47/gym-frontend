import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";



export default function OutlinedCard({quote, author}) {
  return (
    <motion.div
    initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
    whileInView={{ opacity: 1, x: 0 }} // Slide into view
    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the card is in view
    transition={{ duration: 0.5 }} // Control animation speed
    className="bg-white shadow-md p-4 rounded-lg max-w-sm"
  >
    <Box sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Quote of the Day
      </Typography>
      <Typography variant="body2">
        {quote}
      </Typography>
    </CardContent>
    <CardActions >
      <Button size="small">{author}</Button>
    </CardActions>
    </Box>
    </motion.div>
  );
}
