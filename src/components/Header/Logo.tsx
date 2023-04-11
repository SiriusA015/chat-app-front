import Typography from '@mui/material/Typography';

export const Logo: React.FC = () => {

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 7,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.5rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
        style={{marginLeft:"0px"}}
      ><img src="/assets/img/logo/Vlogo.svg" alt="" style={{width:"110px"}} />
      </Typography>
    </>
  )
} 