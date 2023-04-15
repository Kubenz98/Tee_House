import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='min-w-[290px] overflow-x-auto overscroll-none bg-gray-100 dark:bg-neutral-700'>
      <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
