import IdCardStyle from './IdCardStyle.css'
/*
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
*/

/*
const baseUrl = 'https://i.imgur.com/';
const person = {
  imageId: '7vQD0fP',
  imageSize: 's',
  name: 'Gregorio Y. Zara',
  fileExtension: '.jpg'
};

export default function TodoList() {
  return (
      <div className="person-theme">
        <h1>{person.name}'s Todos</h1>
        <img
            className="avatar"
            src={baseUrl + person.imageId + person.imageSize + person.fileExtension}
            alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
      <!-- <p></p>
  );
}
 */

import {render} from 'react-dom';

export default function idCard(props) {

  return (
      <div className={"main-container"}>
        <div className={"driverImage-container"}>
          <img src={props.picture}/>
        </div>
        <div className={"driverInformation-container"}>
          <p><b>First name: </b>{props.firstName}</p>
          <p><b>Last name: </b>{props.lastName}</p>
          <p><b>Gender: </b>{props.gender}</p>
          <p><b>Height: </b>{props.height / 100}m</p>
          <p><b>Birth: </b>{(props.birth.toString().split('').slice(0, 15))}</p>
        </div>

      </div>
  );

}