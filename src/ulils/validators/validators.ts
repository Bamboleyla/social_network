const KIRILLICA = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const SIMBOLS = '~`!#$%^&*()+-={}[]|\\/*,<>?":;№';
/***************************************************************************FUNCTION-VALIDATORS***********************************************************************************************/
//Создаем валидатор required, который при отсутствиивведенного значения в Field будет возврашать ошибку Field is required
export const required = (value: string): string | undefined => {
  if (value) return undefined;
  return "поле не может быть не заполненным";
};

//Валидатор проверки вхождения в адрес почты @ и '.'
export const thereIsAtAndDot = (text: string): string | undefined => {
  //if (text == '') { return undefined };
  //Проверка на количество вхождений @ и . если 1 =>true остальное =>false
  let at = 0; //считаем @
  let dot = 0; //считаем '.'
  let num = 0; // номер символа на котором появилась @
  let num_dot = 0; //номер символа на котором появилась '.'
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "@") {
      //если @ первый символ =>false
      if (i === 0) {
        return "адресс почты не может начинатся с @";
      }
      at++;
      num = i;
    } else if (text[i] === ".") {
      dot++;
      num_dot = i;
      //если '.' последний символ в строке => false
      if (i === text.length - 1) {
        return "после символа'.' должны быть еще знаки, он не может быть последним";
      }
      //если появилась точка, а @ еще нет  =>false
      if (at === 0) {
        for (let i = 0; i < text.length; i++) {
          if (text[i] === "@") {
            at++;
          }
        }
        return at === 0
          ? "символ @ отсутствует в адресе"
          : "символ '.' не может находится перед @";
      }
      //растояние между @ и . меньше 1
      if (num_dot - num < 2) {
        return "растояние между @ и . меньше 1";
      }
    }
  }
  //если есть @ и '.' значит все ОК! => true
  if (at === 1 && dot === 1) {
    return undefined;
  } else {
    /*Другие ошибки*/
    // Нет в адрессе символа '@'
    if (at === 0) {
      return "Нет в адрессе символа @";
    }
    // Нет в адрессе символа '.'
    else if (dot === 0) {
      return "Нет в адрессе символа '.'";
    }
    //символ @ не может быть более 1
    else if (dot > 1) {
      return "символ '.' не может быть более 1";
    }
    //символ '.' не может быть более 1
    else if (at > 1) {
      return "символ @ не может быть более 1";
    }
  }
  return "произошла не предвиденная ошибка";
};
//Валидатор проверки вхождения в адрес почты заглавных букв
export const checkingForCapitalLetters = (text: string): string | undefined => {
  for (let i = 0; i < text.length; i++) {
    //Если символ не является @ и '.'
    if (text[i] !== "@" && text[i] !== ".") {
      //Если буква заглавная => false
      if (text[i] === text[i].toUpperCase()) {
        return "адресс почты не может содержать заглавные буквы";
      }
    }
  }
  return undefined;
};
//Валидатор проверки вхождения в адрес почты букв из кириллицы и символов опасных для приложения
export const thereIsKirilicaOrSimbols = (text: string): string | undefined => {
  for (let i = 0; i < text.length; i++) {
    //проверяем на Кирилицу
    for (let a = 0; a < KIRILLICA.length; a++) {
      if (text[i] === KIRILLICA[a]) {
        return "адресс почты не может содержать буквы из кирилицы";
      }
    }
    //проверяем на наличие недопустимых символов
    for (let b = 0; b < SIMBOLS.length; b++) {
      if (text[i] === SIMBOLS[b]) {
        return "адресс почты не может содержать ~`!#$%^&*()+-={}[]|/*,<>?\":;№'";
      }
    }
  }
  return undefined;
};
//Валидатор проверки вхождения в адрес почты пробелов
export const thereIsSpace = (text: string): string | undefined => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      return "адрес почты не может содержать в себе пробелы";
    }
  }
  return undefined;
};
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Создаем THUNKS-CREATOR для валидации по признаку но с разным переданным значением
/* В этом случае создаем валидатор который проверяет введенное значение в Field на условие не превышающее максимальную длинну строки, в зависимости от нахождения
формы она может быть разной, к примеру не более 30 символов или 100  */
//Передаваемый аргумент maxLength который может использовать замыкание и будет тем условием на которое нужно проверить наш Field
export const maxLengthCreator = (maxLength: number) => (value: string) => {
  /* Если значение переданное в Field присутсвует и длина более maxLength тогда выводим ошибку max length is ${maxLength} symbols, в противном случае undefined */
  if (value && value.length > maxLength)
    return `max length is ${maxLength} symbols`;
  return undefined;
};