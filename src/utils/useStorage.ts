export const UseStorage = (chave: string, valor: string) => {
  localStorage.setItem(chave, valor)
}

export const GetToken = (chave: string) => {
  const token = localStorage.getItem(chave)
  return token
}
