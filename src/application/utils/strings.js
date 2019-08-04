// @flow

const Strings = {
  TABS: {
    MAIN_DATA: 'Основные данные',
    ADDRESS: 'Адрес доставки',
  },

  MAIN_DATA: {
    NAME: {
      NAME: 'name',
      LABEL: 'Имя',
    },
    SURNAME: {
      NAME: 'surname',
      LABEL: 'Фамилия',
    },
    PHONE: {
      NAME: 'phone',
      LABEL: 'Телефон',
      MASK: 'phone',
    },
    EMAIL: {
      NAME: 'email',
      LABEL: 'Email',
      PLACEHOLDER: 'example@example.com',
    },
  },

  ADDRESS: {
    DELIVERY: {
      NAME: 'delivery',
      LABEL: ['Доставка', 'Самовывоз'],
    },
    PICKUP: {
      NAME: 'pickup',
      LABEL: 'Самовывоз',
    },
    COUNTRY: {
      NAME: 'country',
      LABEL: 'Страна',
      ITEMS: [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', text: 'Australia' },
        { key: 'at', value: 'at', text: 'Austria' },
        { key: 'az', value: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', text: 'Benin' },
      ],
    },
    CITY: {
      NAME: 'city',
      LABEL: 'Город',
    },
    ZIP: {
      NAME: 'zip',
      LABEL: 'Индекс',
    },
    ADDRESS: {
      NAME: 'address',
      LABEL: 'Адрес',
    },
    DATE_DELIVERY: {
      NAME: 'dateDelivery',
      LABEL: 'Дата доставки',
    },
    DESCRIPTION: {
      NAME: 'description',
      LABEL: 'Комментарии к заказу',
    },
  },

  FORM: {
    SELECT: {
      PLACEHOLDER: 'Не выбрано',
    },
    TEXTAREA: {
      PLACEHOLDER: 'Ваш комментарий здесь...',
    },
    BUTTONS: {
      NEXT: 'Продолжить',
      SUBMIT: 'Оформить заказ',
    },

    VALIDATION: {
      REQUIRED: field => `Поле ${field} является обязательным для заполнения`,
    },
  },
};

export default Strings;
