import { Container } from '@/components/Container'
import { PassionYoga } from '@/components/home/content/PassionYoga'
import { ServicesYoga } from '@/components/home/content/ServicesYoga'
import { PracticesYoga } from '@/components/home/content/PracticesYoga'
import { ChallengeYoga } from '@/components/home/content/ChallengeYoga'
import { CreatingYoga } from '@/components/home/content/CreatingYoga'

export const ContentHome = () => {
  return (
    <Container classNames='flex flex-col gap-16'>
      <div id='container-passion-yoga'>
        <PassionYoga />
      </div>
      <div id='container-services-yoga'>
        <ServicesYoga />
      </div>
      <div id='container-practices-yoga'>
        <PracticesYoga />
      </div>
      <div id='container-chanllenge-yoga'>
        <ChallengeYoga />
      </div>
      <div id='container-creando-yoga'>
        <CreatingYoga />
      </div>
    </Container>
  )
}
