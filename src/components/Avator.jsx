export default function Avator() {
  return (
    <div className='col-span-4 md:col-span-2 bg-white dark:bg-slate-800 rounded-[2rem] p-8 flex justify-around items-center shadow-sm border border-white dark:border-slate-700'>
      <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg'>
        <img
          src='/avator-headshot.png'
          alt='Eddie'
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
          Eddie Yeung
        </h1>
        <p className='text-slate-500 dark:text-slate-400 font-medium mt-2'>
          Frontend Developer
        </p>
      </div>
    </div>
  );
}
