import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import './styles/app.scss';

const App: React.FC = () => {
  return <>
  <h1>Lorem ipsum dolor sit amet.</h1>
  <div class="container">
    <div className="item">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum facere aliquam quibusdam fuga alias, officiis corporis dolorum quasi! Fugit voluptatum incidunt quasi ex dolor, distinctio aperiam sint dolorem provident saepe sunt facilis doloribus totam. Reiciendis voluptas culpa vitae tempora, similique repellat nesciunt ex libero veritatis iste velit deserunt? Facere?</div>
      <div>Porro dolor similique corrupti cumque id voluptatum eos repudiandae perferendis rem dolores ullam, maxime ex eligendi alias dignissimos corporis harum exercitationem atque, ut quod doloremque hic. Earum vel repellendus fugit pariatur a tempore cumque. Provident repudiandae reprehenderit nesciunt nam facere velit debitis rerum dolor dolorem vitae! Adipisci enim perspiciatis et.</div>
      <div>Cum commodi expedita, odit quas impedit repellat vitae, dolore, ex aut harum architecto sit doloremque! Ex totam officiis, sit facilis est ullam adipisci quaerat ab, autem fugiat dolorem odit placeat molestiae. Aliquid eveniet vitae nihil voluptas eaque ad praesentium distinctio aspernatur quis laboriosam, qui cumque amet magnam temporibus laudantium odio!</div>
      <div>Dolores sapiente, mollitia placeat magni dicta modi ea totam consequuntur fugiat et aperiam illo rerum accusantium tempore laudantium distinctio eius doloribus! Odit fuga at adipisci consequatur sequi veniam delectus autem beatae illum ratione doloremque quam iure dignissimos molestias, commodi accusantium atque totam ducimus sapiente! Placeat excepturi quasi quo voluptatum dolor!</div>
      <div>Voluptas ducimus, quisquam harum aut eligendi totam asperiores sit quas, officiis id nobis distinctio rem veniam maiores consectetur vel neque ex voluptatem ea fuga consequatur quod reprehenderit? Suscipit, eveniet, sunt incidunt nisi dolores delectus odio minus quas labore voluptatibus totam ad, autem ullam quae? Quo quibusdam esse blanditiis ipsum recusandae.</div>
  </div>
</div>
  </>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);