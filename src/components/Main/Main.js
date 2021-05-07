import './Main.css';

function Main() {
  return (
    <section className='main'>
      <div className='main__main'>
        <h1 className='main__title'>
          ДОБРО ПОЖАЛОВАТЬ НА САЙТ КИНОЛОГИЧЕСКОГО ЦЕНТРА ELITE "KUPA"
        </h1>
        <p className='main__subtitle'>
          Национальный Клуб Породы "Бордер-колли"
        </p>
        <div className='main__container-club-tasks'>
          <p className='main__club-tasks'>Задачи нашего клуба:</p>
          <ul className='main__lists'>
            <li className='main__list'>объединение собаководов и любителей;</li>
            <li className='main__list'>
              консультации в правильном выращивании щенков, в том числе и
              ветеринарные;
            </li>
            <li className='main__list'>
              помощь в приобретении и продаже щенков;
            </li>
            <li className='main__list'>оформление пометов и питомников;</li>
            <li className='main__list'>
              проведение выставок, соревнований и племенных смотров собак;
            </li>
            <li className='main__list'>
              дрессировка собак ( ОКД, ЗКС, послушание, пастьба овец)
            </li>
            <li className='main__list'>
              принимаем собак с документами любых организаций!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Main;
