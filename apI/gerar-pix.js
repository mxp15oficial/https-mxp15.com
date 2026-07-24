const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  try {
    const { valor } = req.body;

    // TODO: Adicione aqui a integração com o seu novo gateway de pagamento
    // Exemplo de dados recebidos: Number(valor || 20)

    // Resposta temporária de sucesso para validar o fluxo do front-end
    return res.status(200).json({ 
      sucesso: true, 
      mensagem: "Gateway removido. Integre seu novo provedor aqui.",
      copiaECola: "00020126580014br.gov.bcb.pix...", // Placeholder
      imagemQrCode: "" // Placeholder
    });

  } catch (error) {
    console.error('Erro interno:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

export default handler;
