import { HeroMessage } from './HeroMessage'
import { TaskArea } from './TaskArea'

export const AppLayout = () => {
  return (

    <div className='flex flex-col lg:flex-row max-w-screen h-full bg-white m-[5px] p-[5px] rounded-[20px]'>
      <HeroMessage />
      <TaskArea />
    </div>
  )
}