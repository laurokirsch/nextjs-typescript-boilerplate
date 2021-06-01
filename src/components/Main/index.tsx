import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Vercel logo" />
      <S.Title>Boilerplate</S.Title>
      <S.Description>NextJS, TypeScript and Styled Components</S.Description>
      <S.Illustration
        src="/img/illustration.svg"
        alt="Illustration of computer code"
      />
    </S.Wrapper>
  )
}

export default Main
