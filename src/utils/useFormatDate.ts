export const formatarData = (dataString: string): string => {
  const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/
  const match = dataString.match(regex)

  if (!match) {
    throw new Error('Data no formato inválido')
  }

  const [, ano, mes, dia, hora, minuto] = match
  const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`

  return dataFormatada
}
