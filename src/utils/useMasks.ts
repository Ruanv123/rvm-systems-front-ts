export const useCpfMask = (valor: string) => {
  const digitsOnly = valor.replace(/\D/g, '')
  const cpfFormatado = digitsOnly.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4',
  )
  return cpfFormatado
}

export const useCpnjMask = (valor: string) => {
  const digitsOnly = valor.replace(/\D/g, '')
  const cnpjFormatado = digitsOnly.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5',
  )
  return cnpjFormatado
}

export const useTelefoneMask = (valor: string) => {
  const digitsOnly = valor.replace(/\D/g, '')
  const telefoneFormatado = digitsOnly.replace(
    /(\d{2})(\d{5})(\d{4})/,
    '($1) $2-$3',
  )
  return telefoneFormatado
}

export const useCepMask = (valor: string) => {
  const digitsOnly = valor.replace(/\D/g, '')
  const telefoneFormatado = digitsOnly.replace(/^(\d{5})(\d{3})/, '$1-$2')
  return telefoneFormatado
}
