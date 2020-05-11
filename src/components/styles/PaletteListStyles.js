import sizes from './sizes';
import bg from '../../assets/bg.svg';
export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#3305aa',
    backgroundImage: `url(${bg})`,
    backgroundAttachment: 'fixed',
    overflowY: 'auto',
  },
  heading: {
    fontSize: '1.6rem',
    letterSpacing: '2.5px',
  },
  container: {
    width: '55%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '70%',
    },
    [sizes.down('xs')]: {
      width: '75%',
    },
  },
  nav: {
    display: 'flex',
    width: '97%',
    padding: '30px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    [sizes.down('xs')]: {
      justifyContent: 'center',
    },
    '& a': {
      color: 'white',
      fontSize: '1rem',
      [sizes.down('xs')]: {
        display: 'none',
      },
    },
  },
  palettes: {
    paddingBottom: '3rem',
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',
    },
  },
};