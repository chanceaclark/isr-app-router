import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { lang: string, path?: string[] }}) {

  if (params.path?.includes('gucci')) notFound()

  return (
    <h1>Language: {params.lang}</h1>
  )
}
