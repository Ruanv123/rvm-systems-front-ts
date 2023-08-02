export const useFirstName = (texto: string): string => {
  // Utilizamos a regex para encontrar o primeiro espaço e tudo que vem depois dele
  const regex = /^(.*?)\s(.*?)\s/
  const match = texto.match(regex)

  if (!match) {
    // Caso não tenha encontrado dois espaços, retorna o texto original
    return texto
  }

  // Retorna apenas o trecho antes dos dois primeiros espaços
  return match[1] + ' ' + match[2]
}
