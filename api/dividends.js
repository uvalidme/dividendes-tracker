module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const data = [
    { company: 'Derichebourg', ticker: 'DBG.PA', exDate: '2025-02-10', payDate: '2025-02-12', amount: 0.13, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'Versé', note: 'Baisse de 18% vs 2024', quantity: 100 },
    { company: 'Sanofi', ticker: 'SAN.PA', exDate: '2025-05-11', payDate: '2025-05-14', amount: 3.92, currency: '€', yield: '4.62%', frequency: 'Annuel', status: 'Versé', note: '30 ans de hausses', quantity: 50 },
    { company: 'Coca-Cola', ticker: 'KO', exDate: '2025-09-15', payDate: '2025-10-01', amount: 0.51, currency: '$', yield: '3.09%', frequency: 'Trimestriel', status: 'Prochain', note: 'Paiement trimestriel', quantity: 25 },
    { company: 'Airbus', ticker: 'AIR.PA', exDate: '2025-04-22', payDate: '2025-04-24', amount: 3.00, currency: '€', yield: '1.55%', frequency: 'Annuel', status: 'Versé', note: '2€ + 1€ exceptionnel', quantity: 75 },
    { company: 'Air France-KLM', ticker: 'AF.PA', exDate: 'N/A', payDate: 'N/A', amount: 0, currency: '€', yield: '0%', frequency: 'Aucun', status: 'Pas de dividende', note: 'Aucun depuis 2019', quantity: 0 },
    { company: 'AXA', ticker: 'CS.PA', exDate: '2025-05-05', payDate: '2025-05-07', amount: 2.15, currency: '€', yield: '5.2%', frequency: 'Annuel', status: 'Versé', note: 'Hausse 8,9%', quantity: 120 },
    { company: 'Crédit Agricole', ticker: 'ACA.PA', exDate: '2025-05-26', payDate: '2025-05-28', amount: 1.10, currency: '€', yield: '6.8%', frequency: 'Annuel', status: 'Versé', note: '', quantity: 200 },
    { company: 'SES', ticker: 'SESG.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier', quantity: 0 },
    { company: 'Eutelsat', ticker: 'ETL.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Fusion OneWeb', quantity: 0 },
    { company: 'ArcelorMittal', ticker: 'MT', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '$', yield: 'N/A', frequency: 'Trimestriel', status: 'En attente', note: 'Données à vérifier', quantity: 0 },
    { company: 'Accor', ticker: 'AC.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier', quantity: 0 },
    { company: 'Unibail-Rodamco', ticker: 'URW.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Semestriel', status: 'En attente', note: 'SIIC', quantity: 0 },
    { company: 'Nacon', ticker: 'NACON.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier', quantity: 0 },
    { company: 'Elis', ticker: 'ELIS.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier', quantity: 0 }
  ];

  res.status(200).json({
    success: true,
    data: data,
    lastUpdate: new Date().toISOString()
  });
};
