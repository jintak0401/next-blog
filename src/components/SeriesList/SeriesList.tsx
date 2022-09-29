import Link from 'next/link'
import React from 'react'

import { useStyles } from '@/components/SeriesList/SeriesList.styles'
import { SeriesListProps } from '@/components/SeriesList/types'

const SeriesList = ({ seriesPosts }: SeriesListProps) => {
  const { classes } = useStyles()
  const [listVisible, setListVisible] = React.useState<boolean>(false)

  if (seriesPosts?.length > 0) {
    return (
      <div className={classes.wrapper}>
        <h3>우아한 테크캠프</h3>
        {listVisible && (
          <ol className={classes.seriesList}>
            {seriesPosts?.length > 0 &&
              seriesPosts.map((post, idx) => (
                <li key={idx}>
                  <Link href={`/blog/${post.slug}`}>
                    <span className={classes.link}>{post.title}</span>
                  </Link>
                </li>
              ))}
          </ol>
        )}
        <button onClick={() => setListVisible((prev) => !prev)}>
          {listVisible ? '숨기기' : '목록 보기'}
        </button>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(SeriesList)
