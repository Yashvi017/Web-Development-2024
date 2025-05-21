import React from 'react';
import ReactDOM from 'react-dom/client';
// 12) create web application display list of animals/birds/insects of 30 species. each species should have name,photo,expected life, food. all species should be in list of objects. use map function to display it 

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.species = [
      { img: 'https://picsum.photos/300/200?random=1', name: 'Lion', expectedlife: '10-14 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=2', name: 'Elephant', expectedlife: '60-70 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=3', name: 'Tiger', expectedlife: '15-20 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=4', name: 'Peacock', expectedlife: '15-20 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=5', name: 'Parrot', expectedlife: '50-60 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=6', name: 'Penguin', expectedlife: '15-20 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=7', name: 'Giraffe', expectedlife: '25-30 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=8', name: 'Zebra', expectedlife: '20-25 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=9', name: 'Kangaroo', expectedlife: '20-25 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=10', name: 'Owl', expectedlife: '10-20 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=11', name: 'Horse', expectedlife: '25-30 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=12', name: 'Dog', expectedlife: '10-15 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=13', name: 'Cat', expectedlife: '12-18 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=14', name: 'Butterfly', expectedlife: '1-2 weeks', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=15', name: 'Bee', expectedlife: '5-6 weeks', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=16', name: 'Ant', expectedlife: '1-3 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=17', name: 'Rabbit', expectedlife: '8-12 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=18', name: 'Crocodile', expectedlife: '70-100 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=19', name: 'Snake', expectedlife: '9-20 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=20', name: 'Dolphin', expectedlife: '40-60 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=21', name: 'Wolf', expectedlife: '8-13 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=22', name: 'Fox', expectedlife: '3-5 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=23', name: 'Frog', expectedlife: '10-12 years', food: 'Carnivore' },
      { img: 'https://picsum.photos/300/200?random=24', name: 'Deer', expectedlife: '10-20 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=25', name: 'Turtle', expectedlife: '50-100 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=26', name: 'Monkey', expectedlife: '20-30 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=27', name: 'Panda', expectedlife: '20 years', food: 'Herbivore' },
      { img: 'https://picsum.photos/300/200?random=28', name: 'Bat', expectedlife: '10-20 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=29', name: 'Flamingo', expectedlife: '20-30 years', food: 'Omnivore' },
      { img: 'https://picsum.photos/300/200?random=30', name: 'Chameleon', expectedlife: '5-10 years', food: 'Carnivore' }
    ];
  }
  showSpecies = (items, index) => {
    return(
    <div className="col-lg-3">
      <div className="card h-100 species-card">
        <img src={items.img} className="card-img-top" alt="Lion" />
        <div className="card-body">
          <h5 className="card-title">{items.name}</h5>
          <p><strong>Expected Life:</strong> {items.expectedlife}</p>
          <p><strong>Food:</strong>{items.food}</p>
        </div>
      </div>
    </div>);
  }
  render() {
    return (
      <div className="container py-4">
        <h1 className="mb-4 text-center">List of Species</h1>
        <div className="row g-4">
          {this.species.map((item,index) => this.showSpecies(item,index))}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Species />);
