// API Backend pour récupérer les dividendes
const axios = require('axios');

// Données de secours (au cas où l'API ne répond pas)
const fallbackData = [
  { company: 'Derichebourg', ticker: 'DBG.PA', exDate: '2025-02-10', payDate: '2025-02-12', amount: 0.13, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'Versé', note: 'Baisse de 18% vs 2024' },
  { company: 'Sanofi', ticker: 'SAN.PA', exDate: '2025-05-11', payDate: '2025-05-14', amount: 3.92, currency: '€', yield: '4.62%', frequency: 'Annuel', status: 'Versé', note: '30 ans de hausses consécutives' },
  { company: 'Coca-Cola', ticker: 'KO', exDate: '2025-09-15', payDate: '2025-10-01', amount: 0.51, currency: '$', yield: '3.09%', frequency: 'Trimestriel', status: 'Prochain', note: 'Paiement trimestriel' },
  { company: 'Airbus', ticker: 'AIR.PA', exDate: '2025-04-22', payDate: '2025-04-24', amount: 3.00, currency: '€', yield: '1.55%', frequency: 'Annuel', status: 'Versé', note: '2€ ordinaire + 1€ exceptionnel' },
  { company: 'Air France-KLM', ticker: 'AF.PA', exDate: 'N/A', payDate: 'N/A', amount: 0, currency: '€', yield: '0%', frequency: 'Aucun', status: 'Pas de dividende', note: 'Aucun dividende depuis 2019' },
  { company: 'AXA', ticker: 'CS.PA', exDate: '2025-05-05', payDate: '2025-05-07', amount: 2.15, currency: '€', yield: '5.2%', frequency: 'Annuel', status: 'Versé', note: 'Hausse de 8,9% vs 2024' },
  { company: 'Crédit Agricole', ticker: 'ACA.PA', exDate: '2025-05-26', payDate: '2025-05-28', amount: 1.10, currency: '€', yield: '6.8%', frequency: 'Annuel', status: 'Versé', note: '' },
  { company: 'SES', ticker: 'SESG.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier' },
  { company: 'Eutelsat', ticker: 'ETL.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Fusion avec OneWeb' },
  { company: 'ArcelorMittal', ticker: 'MT', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '$', yield: 'N/A', frequency: 'Trimestriel', status: 'En attente', note: 'Données à vérifier' },
  { company: 'Accor', ticker: 'AC.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier' },
  { company: 'Unibail-Rodamco', ticker: 'URW.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Semestriel', status: 'En attente', note: 'SIIC' },
  { company: 'Nacon', ticker: 'NACON.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier' },
  { company: 'Elis', ticker: 'ELIS.PA', exDate: 'À confirmer', payDate: 'À confirmer', amount: null, currency: '€', yield: 'N/A', frequency: 'Annuel', status: 'En attente', note: 'Données à vérifier' }
];

module.exports = async (req, res) => {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Pour l'instant, on retourne les données de secours
    // Tu pourras ajouter une vraie API financière plus tard
    res.status(200).json({
      success: true,
      data: fallbackData,
      lastUpdate: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      data: fallbackData
    });
  }
};
