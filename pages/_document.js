import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const setInitialTheme = `
      const isDark = window.localStorage.getItem('airbnbTheme') ? (window.localStorage.getItem('airbnbTheme') === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.body.classList.add('dark');
      }
    `
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
          <meta
            name='description'
            content='Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb.'
          />
          <link rel='icon' href='favicon.ico' />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
