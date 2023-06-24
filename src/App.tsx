import { Button, Stack } from "@mui/joy"
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useState } from "react"

function App() {
  const [ date, setDate ] = useState<dateFns | null>(null);
  const [ time, setTime ] = useState<dateFns | null>(null);

  console.log(time)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Button 
        variant='solid'
        sx={{mb: '1rem'}}
      >
        Click me
      </Button>
      <Stack 
        direction='row'
        gap='1rem'
        useFlexGap
      >
        <DatePicker value={date} onChange={(newVal) => setDate(newVal)}/>
        <TimePicker value={time} onChange={(newVal) => setTime(newVal)} />
      </Stack>
    </LocalizationProvider>
  )
}

export default App
