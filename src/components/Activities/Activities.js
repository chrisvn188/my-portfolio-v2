export default function Activities({ handleClickOnActivityCard, activity }) {
  return (
    <div
      className='w-[8rem] h-[8rem] border-dotted border-brand-yellow border-2 p-6 rounded-3xl transition-all hover:-translate-y-2  cursor-pointer flex flex-col items-center relative'
      onClick={handleClickOnActivityCard}>
      <img
        className='max-h-full'
        src={activity.imgSrc}
        alt={activity.altText}
      />
      <h4 className='text-md sm:text-lg mt-2 capitalize absolute -bottom-8'>
        {activity.name}
      </h4>
    </div>
  )
}
