import { Grid } from '@mantine/core'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { ProjectData } from '@/lib/types'

import Layout from '@/components/Layout'
import PageLayout from '@/components/Layout/PageLayout'
import ProjectsCard from '@/components/ProjectCard'

export default function Projects() {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const projectsData: ProjectData = {
    'zh-TW': [
      {
        title: 'Blog',
        description: `分享我的知識與經驗`,
        href: 'https://honghong.me',
      },
      {
        title: '好友測驗作弊器',
        description: '在好友測驗上取得滿分',
        href: 'https://friendquiz.honghong.me',
      },
      {
        title: '小康的社交媒體',
        description: '展示更多小康的社交媒體',
        href: 'https://link.honghong.me',
      },
      {
        title: '小康 Tools',
        description: 'Web 開發人員的一些工具',
        href: 'https://tools.honghong.me',
      },
    ],
    en: [
      {
        title: 'Blog',
        description: `Share my knowledge and experience`,
        href: 'https://honghong.me',
      },
      {
        title: 'Friend quiz cheat tool',
        description: 'Get full score in friend quiz',
        href: 'https://friendquiz.honghong.me',
      },
      {
        title: "小康's social media",
        description: "Display more 小康's social media",
        href: 'https://link.honghong.me',
      },
      {
        title: '小康 Tools',
        description: 'Some tools for web developer',
        href: 'https://tools.honghong.me',
      },
    ],

    'ko-KR': [
      {
        title: '다크모드 vs 라이트모드',
        description: `다크모드와 라이트모드 중 더 적합한 모드를 찾아주는 프로젝트`,
        href: 'https://dark-vs-light.vercel.app',
      },
      {
        title: '포도알 시뮬레이션',
        description: `모바일에서 버튼의 위치에 따라 사용자가 버튼의 어느 위치를 터치하는지 측정하기 위한 프로젝트`,
        href: 'https://grape-simulation.vercel.app',
      },
    ],
  }

  return (
    <Layout title='Projects' description={t('Seo.projectsDesc')}>
      <PageLayout title='Projects' description={t('Seo.projectsDesc')}>
        <Grid>
          {projectsData[locale]?.map((data) => (
            <Grid.Col key={data.title} span={12} md={6}>
              <ProjectsCard
                title={data.title}
                description={data.description}
                href={data.href}
              />
            </Grid.Col>
          ))}
        </Grid>
      </PageLayout>
    </Layout>
  )
}
