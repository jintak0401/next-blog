import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    borderRadius: 8,
    padding: '10px 20px',
    margin: '20px 0',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[0]
        : theme.colors.gray[3],
  },

  seriesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  link: {
    display: 'inline',
    textDecoration: 'none',
    cursor: 'pointer',
    width: 'auto',

    /*
    color:
      theme.colorScheme === 'dark'
        ? theme.colors[theme.primaryColor][9]
        : theme.colors[theme.primaryColor][7],
*/

    '&:hover': {
      // color: theme.colorScheme === 'dark' ? theme.colors.red[6] : 'red',

      /*
      color:
        theme.colorScheme === 'dark'
          ? theme.colors[theme.primaryColor][5]
          : theme.primaryColor,
*/

      textDecoration: 'underline',
    },
  },
}))
