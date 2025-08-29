// Static content so your JSX stays clean and editable in one place.

export const sat = {
    portalUrl: "https://portalconsdonazr.sat.gob.mx/Consulta/Transparencia",
    rfc: "FIG121007MI6",
    denomination: "Fundación Internacional Granito de Arena A.C.",
    oficio: "600-01-06-00-00-2021-1525",
    oficioDate: "10/Dic/2021",
  };
  
  export const kpis = [
    {
      title: "Donataria Autorizada",
      subtitle: `Oficio SAT ${sat.oficio} (${sat.oficioDate})`,
      icon: "ShieldCheck",
    },
    {
      title: "Ingresos 2018",
      subtitle: "Donativos: $815,438.32 · Gastos: $963,155.10",
      icon: "Banknote",
    },
    {
      title: "Balance 2018",
      subtitle: "Activo = Pasivo + Capital: $268,677.92",
      icon: "ChartBar",
    },
    {
      title: "Cobertura 2019",
      subtitle: "Talleres en múltiples municipios de Chiapas",
      icon: "MapPinned",
    },
  ];
  
  export const commitments = [
    {
      title: "Publicación anual",
      text: "Entregamos reporte anual (OSC/CLUNI) en tiempo y forma.",
    },
    {
      title: "Transparencia en web",
      text: "Publicamos informe de destino de recursos y estados financieros.",
    },
    {
      title: "Sin apoyos públicos 2022",
      text: "Informe 2022 sin apoyos gubernamentales, presentado a tiempo.",
    },
  ];
  
  export const docs = [
    { label: "Informe de Actividades 2022", file: "a01-informe-de-actividades-2022.pdf" },
    { label: "Estados Financieros 2018 (Balance y Resultados)", file: "a02-estados-financieros-2018.pdf" },
    { label: "Informe Financiero 2017", file: "a03-informe-financiero-2017.pdf" },
    { label: "Informe Financiero 2018", file: "a03-informe-financiero-2018.pdf" },
    { label: "Informe Financiero 2019", file: "a03-informe-financiero-2019.pdf" },
    { label: "Presupuesto 2020", file: "a03-presupuesto-2020.pdf" },
    { label: "Informe de Transparencia (SAT)", file: "a03-informe-de-transparencia-sat.pdf" },
    { label: "Informe Anual (OSC)", file: "a03-informe-anual.pdf" },
  ];
  