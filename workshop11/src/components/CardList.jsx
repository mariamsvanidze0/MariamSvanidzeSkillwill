import React from 'react';
import '../App.css';
import Card from '../components/Card';
import georgeOrwellImage from '../assets/1984.jpeg';
import williamShakespeareImage from '../assets/macbeth.jpeg';
import agathaChristieImage from '../assets/andthentherewerenone.jpeg'; 
import justineCowanImage from '../assets/thesecretof.jpeg'; 

const CardList = () => {
  return (
    <div className="card-list">
      <Card 
        author="George Orwell" 
        name="1984" 
        image={georgeOrwellImage} 
        description="A dystopian social science fiction novel and cautionary tale, written in 1948."
        year="1949"
        awards="Prometheus Hall of Fame Award"
      />
      <Card 
        author="William Shakespeare" 
        name="Macbeth" 
        image={williamShakespeareImage} 
        description="A tragedy written by William Shakespeare, it dramatizes the damaging physical and psychological effects of political ambition."
        year="1606"
        awards="None"
      />
      <Card 
        author="Agatha Christie" 
        name="And Then There Were None" 
        image={agathaChristieImage} 
        description="A mystery novel by Agatha Christie, widely considered her masterpiece and also described by her as the most difficult of her books to write."
        year="1939"
        awards="None"
      />
      <Card 
        author="Justine Cowan" 
        name="The Secret Life of Dorothy Soames" 
        image={justineCowanImage} 
        description="A memoir that reveals the story of a mother's secret past and her own childhood in London’s Foundling Hospital."
        year="2021"
        awards="None"
      />
    </div>
  );
}

export default CardList;
