//? En esta funcion envolvemos los parametros en  {}, para poder hacer nuestra function
//? mas esclabale, prque ahora el order de los parametros no importas
export const response = ({ res, ok = true, status = 200, data }) => {
  res.status(status).json({
    ok,
    data,
  });
};
