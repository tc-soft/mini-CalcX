import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const CustomSlider = ({ratio, onChange}) => {
    return (
      <Box width={400}>
        <Slider
            size="small"
            aria-label="Small"
            valueLabelDisplay="auto"
            min={0}
            max={1}
            step={0.01}
            value={ratio}
            onChange={onChange}
        />
      </Box>
    );
};

export default CustomSlider;