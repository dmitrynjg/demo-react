export default function UserInfo({ name, surname, fatherName, login, email, id }) {
  return (
    <article>
      <h2 class='text-lg font-semibold text-slate-900 pt-4 pb-2 px-4 sm:px-6 lg:px-4 xl:px-6 dark:text-slate-100  duration-[1.5s] delay-500'>
        Информация о пользователе
      </h2>
      <dl class='flex flex-wrap divide-y divide-slate-200 border-b border-slate-200 text-sm sm:text-base lg:text-sm xl:text-base dark:divide-slate-200/5 dark:border-slate-200/5'>
        <div class='w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6'>
          <div class='w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500'>
            email
          </div>
          <div class='transition-opacity duration-[1.5s] delay-500'>{email}</div>
        </div>
        <div class='w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6'>
          <dt class='w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500'>
            login
          </dt>
          <dd class='italic transition-opacity duration-[1.5s] delay-500'>{login}</dd>
        </div>
        <div class='w-full flex-none flex items-center p-4 sm:py-5 sm:px-6 lg:p-4 xl:py-5 xl:px-6'>
          <dt class='w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500'>
            Ф.И.О.
          </dt>
          <dd class='text-sm font-medium text-slate-700 bg-slate-100 rounded-full py-1 px-3 dark:bg-slate-700 dark:text-slate-300 transition-opacity duration-[1.5s] delay-500'>
            {surname} {name} {fatherName}
          </dd>
        </div>
      </dl>
    </article>
  );
}
