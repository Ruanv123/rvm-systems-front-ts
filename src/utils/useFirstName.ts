export const useFirstName = (texto: string): string => {
  // Utilizamos a regex para encontrar o primeiro espaço e tudo que vem depois dele
  const regex = /^(.*?)\s/
  const match = texto.match(regex)

  if (!match) {
    // Caso não tenha encontrado um espaço, retorna o texto original
    return texto
  }

  // Retorna apenas o trecho antes do primeiro espaço
  return match[1]
}
