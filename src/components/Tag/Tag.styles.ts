import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    gap: 15,
  },

  link: {
    display: 'inline-block',
    textDecoration: 'none',

    color:
      theme.colorScheme === 'dark'
        ? theme.colors[theme.primaryColor][9]
        : theme.colors[theme.primaryColor][7],

    '&:hover': {
      // color: theme.colorScheme === 'dark' ? theme.colors.red[6] : 'red',

      color:
        theme.colorScheme === 'dark'
          ? theme.colors[theme.primaryColor][5]
          : theme.primaryColor,
    },
  },
}))
