import { useState } from 'react';



function Prehistoire() {

    const options = [
        {
            id:1,
            etat: "des jumelles",
        },
        {
            id:2,
            etat: "un lampe torche",
        },
        {
            id:3,
            etat: "un briquet",
        },
        {
            id:4,
            etat: "une montre",
        },
        {
            id:5,
            etat: "un peigne",
        },
        {
            id:6,
            etat: "un telephone",
        }
    ]
    
      const [selectedOption, setSelectedOption] = useState('');
    
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      return (
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">qu'est ce, tu veux mon gars</option>
          {options.map((option) => (
            <option key={option.etat} value={option.etat}>
              {option.etat}
            </option>
          ))}
        </select>
      )
    }
export default Prehistoire