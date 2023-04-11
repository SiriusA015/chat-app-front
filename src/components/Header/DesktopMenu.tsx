import { Box, Button } from '@mui/material';

export const DesktopMenu: React.FC<{ pages: string[] }> = (props: { pages: string[] }) => {

  let { pages } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 3, color: 'black', display: 'block' }}
            style={{fontSize:"15px", marginRight: "30px"}}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  )
}