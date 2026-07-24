const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  try {
    const { valor } = req.body;

    // TODO: Adicione aqui a integração com o seu novo gateway de pagamento no futuro.
    // O valor recebido do front-end está em 'valor' (ex: Number(valor || 20))

    // Resposta temporária de sucesso para manter o fluxo funcionando sem quebrar
    return res.status(200).json({ 
      sucesso: true, 
      mensagem: "Gateway removido temporariamente. Pronto para receber o novo provedor.",
      copiaECola: "00020126580014br.gov.bcb.pix...", 
      imagemQrCode: "" 
    });

  } catch (error) {
    console.error('Erro interno:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

export default handler;
