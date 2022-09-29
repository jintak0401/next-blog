import Link from 'next/link'

import { useStyles } from '@/components/Tag/Tag.styles'
import { TagsProps } from '@/components/Tag/types'

const TagList = ({ tags }: TagsProps) => {
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      {tags &&
        tags.map((tag) => (
          <Link href='/blog' key={tag}>
            <span className={classes.link}>{tag}</span>
          </Link>
        ))}
    </div>
  )
}

export default TagList
