import axios from "axios";

// Define a URL da sua API
const API_URL = "http://localhost:4000";

// Define a função para buscar todos os produtos
export async function getProducts() {
  try {
    // Faça uma solicitação GET para a rota de produtos da sua API
    const response = await axios.get(`${API_URL}/api/product`);

    // Verifique se a solicitação foi bem-sucedida
    if (response.status === 200) {
      // Retorne os produtos a partir da resposta da API
      return response.data;
    } else {
      // Lida com erros ou retorna um valor padrão, se necessário
      console.error("Erro ao buscar produtos:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return null;
  }
}
