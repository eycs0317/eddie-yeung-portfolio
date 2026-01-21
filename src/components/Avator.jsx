export default function Avator() {
  return (
    <div className='md:col-span-2 md:row-span-1 bg-white rounded-[2rem] p-8 flex justify-around items-center shadow-sm border border-white'>
      <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg'>
        <img
          src='/avator-headshot.png'
          alt='Eddie'
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Eddie Yeung</h1>
        <p className='text-slate-500 font-medium mt-2'>Frontend Developer</p>
      </div>
    </div>
  );
}
