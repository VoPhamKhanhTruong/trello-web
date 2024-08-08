import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloLogo from '../../assets/trello.svg'
function AppBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <AppsIcon sx={{ colors: 'primary.main' }} />
        <img src={trelloLogo} alt="trello logo"/>
        Trello
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar