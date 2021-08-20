import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.css'


const Cards = () => {

    const [people, setPeople] = useState([
        {
            name: 'Dwayne JohnSon',
            url: "https://tse2.mm.bing.net/th?id=OIP.lu5OGTyeFgSNKlSUwQq1GgHaFi&pid=Api&P=0&w=215&h=161"
        },
        {
            name: 'Justin Bieber',
            url: "https://tse4.mm.bing.net/th?id=OIP.zgCfNBlu7OafMzaldHcU2wHaJG&pid=Api&P=0&w=300&h=300"
        },
        {
            name: 'Will Smith',
            url: "https://tse3.mm.bing.net/th?id=OIP.4-e5A3b1fJJBoi43_ODDNAHaK4&pid=Api&P=0&w=300&h=300"
        },
        
        {
            name: 'Brad Traversy',
            url: "https://tse4.mm.bing.net/th?id=OIP.YW5DF7pihLrBVlKUvBuLvQAAAA&pid=Api&P=0&w=300&h=300"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }
    return (
        <div className="cards">
            <div className="cards__cardContainer">
                {people.map((person)=>(
                    <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}
                    >

                        <div style={{backgroundImage: "url(" + person.url + ")"}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards
