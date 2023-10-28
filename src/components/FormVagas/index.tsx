import { FormEvent, useState } from 'react'

import { BtnSearch, Formulary, SpotSearch } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulary onSubmit={aoEnviarForm}>
      <SpotSearch
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnSearch type="submit">Pesquisar</BtnSearch>
    </Formulary>
  )
}
export default FormVagas
