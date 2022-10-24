import coupe from "assets/icons/coupe.svg";
import sedan from "assets/icons/sedan.svg";
import hatchback from "assets/icons/hatchback.svg";
import limousine from "assets/icons/limousine.svg";
import minivan from "assets/icons/minivan.svg";
import mpv from "assets/icons/mpv.svg";
import stationWagon from "assets/icons/station-wagon.svg";
import suv from "assets/icons/suv.svg";
import van from "assets/icons/van.svg";

export const EURO_STANDART_TYPE = {
  EURO_1: 1,
  EURO_2: 2,
  EURO_3: 3,
  EURO_4: 4,
  EURO_5: 5,
  EURO_6: 6,
};

export const ENGINE_TYPE = {
  GASOLINE: 1,
  DIESEL: 2,
  ELECTRIC: 3,
  HYBRID: 4,
};

export const GEARBOX_TYPE = {
  MANUAL: 1,
  AUTOMATIC: 2,
  SEMI_AUTOMATIC: 3,
};

export const PRIMARY_CATEGORY = [
  {
    id: 1,
    name: "Automobiles",
  },
  {
    id: 2,
    name: "Buses",
  },
  {
    id: 3,
    name: "Trucks",
  },
  {
    id: 4,
    name: "Motorcycles",
  },
  {
    id: 5,
    name: "Agriculturals",
  },
  {
    id: 6,
    name: "Forklifts",
  },
  {
    id: 5,
    name: "Caravans",
  },
  {
    id: 6,
    name: "Forklifts",
  },
  {
    id: 7,
    name: "Yachts and Boats",
  },
];

export const CAR_BODY_TYPES = [
  {
    id: 1,
    name: "Sedan",
    imgPath: sedan,
  },
  {
    id: 2,
    name: "Hatchback",
    imgPath: hatchback,
  },
  {
    id: 3,
    name: "Station Wagon",
    imgPath: stationWagon,
  },
  {
    id: 4,
    name: "Coupe",
    imgPath: coupe,
  },
  {
    id: 5,
    name: "Cabriolet",
    imgPath: coupe,
  },
  {
    id: 6,
    name: "MPV",
    imgPath: mpv,
  },
  {
    id: 7,
    name: "SUV",
    imgPath: suv,
  },
  {
    id: 8,
    name: "Pickup",
    imgPath: mpv,
  },
  {
    id: 9,
    name: "Minivan",
    imgPath: minivan,
  },
  {
    id: 8,
    name: "Van",
    imgPath: van,
  },
  {
    id: 9,
    name: "Limousine",
    imgPath: limousine,
  },
];

export const VEHICLE_CONDITION = [
  {
    id: 1,
    name: "New",
  },
  {
    id: 2,
    name: "Used",
  },
];

// Безопасност
//  GPS система за проследяване
//  Автоматичен контрол на стабилността
//  Адаптивни предни светлини
//  Антиблокираща система
//  Въздушни възглавници - Задни
//  Въздушни възглавници - Предни
//  Въздушни възглавници - Странични
//  Ел. разпределяне на спирачното усилие
//  Електронна програма за стабилизиране
//  Контрол на налягането на гумите
//  Парктроник
//  Система ISOFIX
//  Система за динамична устойчивост
//  Система за защита от пробуксуване
//  Система за изсушаване на накладките
//  Система за контрол на дистанцията
//  Система за контрол на спускането
//  Система за подпомагане на спирането

// Комфорт
//  Auto Start Stop function
//  Bluetooth \ handsfree система
//  DVD, TV
//  Steptronic, Tiptronic
//  USB, audio\video, IN\AUX изводи
//  Адаптивно въздушно окачване
//  Безключово палене
//  Блокаж на диференциала
//  Бордкомпютър
//  Бързи \ бавни скорости
//  Датчик за светлина
//  Ел. Огледала
//  Ел. Стъкла
//  Ел. регулиране на окачването
//  Ел. регулиране на седалките
//  Ел. усилвател на волана
//  Климатик
//  Климатроник
//  Мултифункционален волан
//  Навигация
//  Отопление на волана
//  Печка
//  Подгряване на предното стъкло
//  Подгряване на седалките
//  Регулиране на волана
//  Сензор за дъжд
//  Серво усилвател на волана
//  Система за измиване на фаровете
//  Система за контрол на скоростта
// (автопилот)
//  Стерео уредба
//  Филтър за твърди частици
//  Хладилна жабка

// Други
//  4x4
//  7 места
//  Buy back
//  Бартер
//  Газова уредба
//  Дълга база
//  Капариран\Продаден
//  Катастрофирал
//  Къса база
//  Лизинг
//  Метанова уредба
//  На части
//  Напълно обслужен
//  Нов внос
//  С право на дан.к-т
//  С регистрация
//  Сервизна книжка
//  Тунинг
// Екстериор
//  2(3) Врати
//  4(5) Врати
//  LED фарове
//  Ксенонови фарове
//  Лети джанти
//  Металик
//  Отопляеми чистачки
//  Панорамен люк
//  Рейлинг на покрива
//  Ролбари
//  Спойлери
//  Теглич
//  Халогенни фарове
//  Шибедах
// Защита
//  OFFROAD пакет
//  Аларма
//  Брониран
//  Имобилайзер
//  Каско
//  Лебедка
//  Подсилени стъкла
//  Централно заключване
// Интериор
//  Велурен салон
//  Десен волан
//  Кожен салон
// Специализирани
//  TAXI
//  За хора с увреждания
//  Катафалка
//  Линейка
//  Учебен
//  Хладилен
//  Хомологация N1
