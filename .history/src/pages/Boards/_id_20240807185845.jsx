//Board Details
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'
import AppBar from '../../components/AppBar/index'
import BoardBar from './BoardBar'
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Content
      </Box>
    </Container>
  )
}

export default Board
