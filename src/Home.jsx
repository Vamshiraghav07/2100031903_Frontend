import React from 'react';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8ff', // Light blue background
    },
    content: {
      maxWidth: '800px',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff', // White content area
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333', // Darker text
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.5',
      color: '#666', // Muted text color
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to the Home Page!</h1>
        <p style={styles.paragraph}>This is the Home Component content.</p>
      </div>
    </div>
  );
};

export default Home;
