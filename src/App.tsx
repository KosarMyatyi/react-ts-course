import React from 'react';
import Card, { CardVariant } from './component/Card';

const App = () => {
  return (
    <div>
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Кнопка</button>
        <div>dfsdfsdf</div>
      </Card>
    </div>
  )
}

export default App;