import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data/')
      .then(res => {
        setData(res);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header>
        <About data={data} />
      </Header>
      <Profile data={data} />
      <Experience data={data} />
      <Academic data={data} />
      <Skills data={data} />
      <Interest data={data} />
      <Languages data={data} />
    </>
  );
};

export default App;
