import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout';
import TopStories from './pages/TopStoriesPage/TopStories.jsx';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:slug" element={<TopStories/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
