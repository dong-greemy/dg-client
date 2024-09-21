import * as H from '@components/header';

export default function Home() {
  return (
    <div>
      <H.Header>
        {/*<H.HeaderBack />*/}
        {/*<H.HeaderLogo />*/}
        <H.HeaderLogo>직주근접</H.HeaderLogo>
        <H.HeaderPage>페이지</H.HeaderPage>
        <H.HeaderClose />
      </H.Header>
      <main>메인</main>
      <footer>푸터</footer>
    </div>
  );
}
