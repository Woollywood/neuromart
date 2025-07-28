import type { IAccordion } from '../components/Accordion.astro';

export const accordions: IAccordion[] = [
  {
    label: 'О компании',
    links: [
      { label: 'Контакты', href: '#' },
      { label: 'Реквизиты', href: '#' },
      { label: 'Новости', href: '#' },
      { label: 'Отзывы', href: '#' },
      { label: 'Сертификаты', href: '#' },
    ],
  },
  {
    label: 'Интернет-Магазин',
    links: [
      { label: 'Личный кабинет', href: '#' },
      { label: 'Доставка и оплата', href: '#' },
      { label: 'Как сделать заказ', href: '#' },
    ],
  },
  {
    label: 'Информация',
    links: [
      { label: 'Вопросы и ответы', href: '#' },
      { label: 'Каталог расцветок, Бланк заказа', href: '#' },
      { label: 'Стать клиентом', href: '#' },
    ],
  },
  {
    label: 'Мы с в Соц.Сетях',
    links: [
      { label: 'Одноклассиники', href: '#' },
      { label: 'VK', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];
