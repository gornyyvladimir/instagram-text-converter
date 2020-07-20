import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import SEO from '../components/Seo';
import Comments from '../components/Comments';
import Content from '../components/Content';
import 'normalize.css';
import './styles.css';

function App() {
  return (
    <>
      <YMInitializer
        accounts={[54322950]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <SEO
        title="Как сделать абзац в инстаграм?"
        description="Не знаете как сделать абзац в инстаграм? Этот онлайн инструмент обязательно вам поможет."
        author="gornyyvladimir"
      />
      <Content />
      <Comments />
    </>
  );
}

export default App;
