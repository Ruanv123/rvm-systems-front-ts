import * as S from './styles'
import {
  MdOutlineMailOutline,
  MdShowChart,
  MdPeopleOutline,
  MdOutlineMode,
  MdOutlineSettings,
  MdOutlineGridView,
} from 'react-icons/md'

export const Features = () => {
  return (
    <>
      <S.Features>
        <S.FContent>
          <S.FTitle>
            Obtenha mais informações de como nossos clientes usam o sistema
          </S.FTitle>
          <S.FTxt>
            Com nossos recursos integrados de CRM, gerenciamento de projetos,
            colaboração e faturamento, você pode gerenciar todos os aspectos do
            seu negócio em uma plataforma segura.
          </S.FTxt>
        </S.FContent>
        <S.FLayout>
          <S.FCard>
            <S.FCIcon>
              <MdOutlineMailOutline size={24} />
            </S.FCIcon>
            <S.FCTitle>Meça seu desempenho</S.FCTitle>
            <S.FCText>
              Mantenha-se conectado com sua equipe e tome decisões rápidas onde
              quer que esteja.
            </S.FCText>
          </S.FCard>
          <S.FCard>
            <S.FCIcon>
              <MdShowChart size={24} />
            </S.FCIcon>
            <S.FCTitle>Análise personalizada</S.FCTitle>
            <S.FCText>
              Obtenha um painel completo na nuvem. Veja métricas de atividade,
              receita e sociais em um só lugar.
            </S.FCText>
          </S.FCard>
          <S.FCard>
            <S.FCIcon>
              <MdPeopleOutline size={24} />
            </S.FCIcon>
            <S.FCTitle>Gestão de Equipe</S.FCTitle>
            <S.FCText>
              Nosso sistema permite que você saiba o que está acontecendo com o
              cliente e projetos para que você
            </S.FCText>
          </S.FCard>
          <S.FCard>
            <S.FCIcon>
              <MdOutlineMode size={24} />
            </S.FCIcon>
            <S.FCTitle>Sistema Personalizado</S.FCTitle>
            <S.FCText>
              Um sistema personalizado, com todas as necessidades e a cara do
              cliente.
            </S.FCText>
          </S.FCard>
          <S.FCard>
            <S.FCIcon>
              <MdOutlineGridView size={24} />
            </S.FCIcon>
            <S.FCTitle>Conectar vários aplicativos</S.FCTitle>
            <S.FCText>
              A primeira plataforma de negócios a reunir todos os seus produtos
              em um só lugar.
            </S.FCText>
          </S.FCard>
          <S.FCard>
            <S.FCIcon>
              <MdOutlineSettings size={24} />
            </S.FCIcon>
            <S.FCTitle>Configuração fácil</S.FCTitle>
            <S.FCText>
              Plataforma de Negócios Ponta a Ponta, Gestão de Vendas, Marketing
              Automação, Help Desk
            </S.FCText>
          </S.FCard>
        </S.FLayout>
      </S.Features>
    </>
  )
}
