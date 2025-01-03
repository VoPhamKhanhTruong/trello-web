import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <Box></Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
