import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'NextJS, TypeScript and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Vercel logo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/illustration.svg"
        alt="Illustration of computer code"
      />
    </S.Wrapper>
  )
}

export default Main
