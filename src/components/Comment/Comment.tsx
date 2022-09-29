import Giscus, { Repo } from '@giscus/react'
import { Box, useMantineColorScheme } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'

const Comment = () => {
  const { locale } = useRouter()
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Box my={32} id='comment'>
      <Giscus
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO as Repo}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping='pathname'
        reactionsEnabled='1'
        emitMetadata='1'
        inputPosition='bottom'
        theme={dark ? 'dark' : 'light'}
        lang={locale}
        loading='eager'
      />
    </Box>
  )
}

export default Comment
