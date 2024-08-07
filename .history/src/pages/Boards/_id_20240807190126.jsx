//Board Details
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'
import AppBar from '../../components/AppBar/index'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
