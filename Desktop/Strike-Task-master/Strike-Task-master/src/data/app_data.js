export const status_options = [
  { id: 1, name: "новый" },
  { id: 2, name: "в ожидании" },
  { id: 3, name: "выполнен" },
  { id: 4, name: "в работе" }
];
export const priority_options = [
  { id: 1, name: "низкий" },
  { id: 2, name: "средний" },
  { id: 3, name: "высокий" },
  { id: 4, name: "срочный" }
];
export const TAKE_TICKETS = 10;
export const options_data_format = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
export const map_options = {
  center: { lat: 7.7186518, lng: 81.7189023 },
  zoom: 8,
  backgroundColor: "#3f6789"
};

export const API_KEY_GOOGLE_MAP = "AIzaSyD0r74TOiNpVeA4EgREonzyNuAr6l0mW5E";

export const leftUserMenu = [
  {
    name: "Панели задач",
    path: "/dashboard",
    dropdown: [
      {
        name: "Новые",
        path: "/tasks-new"
      },
      {
        name: "В ожидании",
        path: "/tasks-panding"
      },
      {
        name: "Выполненные",
        path: "/tasks-done"
      },
      {
        name: "В работе",
        path: "/tasks-inworking"
      }
    ]
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: [
      {
        name: "Lorem ispum",
        path: "/tasks-new"
      },
      {
        name: "Lorem ispum",
        path: "/tasks-panding"
      },
      {
        name: "Lorem ispum",
        path: "/tasks-done"
      },
      {
        name: "Lorem ispum",
        path: "/tasks-inworking"
      }
    ]
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  }
];
