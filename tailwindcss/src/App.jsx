import React from 'react'
import Card from './components/Card'

const App = () => {
  return <div className='flex-wrap col-3 gap-4 justify-center'>
    <Card
      img="https://sipalaya.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-1-2025-at-06_22_07-PM.png"
      title="CodeYourFuture: The IT Mentorship Revolution"
      duration="4h"
      price={999}
      original={9999}
      category="CodeYourFuture"
    />

    <Card
      title="UI / UX Design | 2.5 Months"
      duration="100h"
      price={14999}
      original={19999}
      category="Design"
    />

    <Card
      title="Python With Data Science | (3–6) Months"
      duration="100h"
      price={19999}
      original={24999}
      category="Development"
    />

    <Card
      title="Web Design | HTML, CSS & JS | 2 Months"
      duration="100h"
      price={9999}
      original={14999}
      category="Development"
    />

    <Card
      title="App Development with Flutter | 2.5 Months"
      duration="100h"
      price={14999}
      original={19999}
      category="App Development"
    />

    <Card
      title="Java with Spring & Hibernate | 3 Months"
      duration="100h"
      price={19999}
      original={24999}
      category="Development"
    />

    <Card
      title="PHP with Laravel | 2.5 Months"
      duration="100h"
      price={9999}
      original={14999}
      category="Development"
    />

    <Card
      title="Artificial Intelligence: Shape Future Innovations | 2.5 Months"
      duration="100h"
      price={14999}
      original={19999}
      category="Development"
    />

    <Card
      title="Graphic Design | 2.5 Months"
      duration="100h"
      price={14999}
      original={19999}
      category="Design"
    />

    <Card
      title="Frontend Development with React JS | 2.5 Months"
      duration="97h"
      price={14999}
      original={19999}
      category="Development"
    />

    <Card
      title="MERN Stack | 3 Months"
      duration="100h"
      price={19999}
      original={29999}
      category="Development"
    />

    <Card
      title="Full Stack Web Development in Python With Django | 3 Months"
      duration="100h"
      price={14999}
      original={19999}
      category="Development"
    />

    <Card
      title="Physical / Online Digital Marketing Training | 2.5 Months"
      duration="100h"
      price={14999}
      original={19999}
      category="Digital Marketing"
    />
  </div>
}

export default App