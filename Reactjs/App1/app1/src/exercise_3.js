import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var time = new Date();
function showCurrentTime(time)
{
    //I am function and i can return JSX  too
    
    var weekDayNum = time.getDay();
    var weekDay = '';

    if(weekDayNum === 0){
      weekDay = "Sunday";
    }
    else if(weekDayNum === 1){
      weekDay = "Monday"
    }
    else if(weekDayNum === 2){
      weekDay = "Tuesday"
    }
    else if(weekDayNum === 3){
      weekDay = "Wednesday"
    }
    else if(weekDayNum === 4){
      weekDay = "Thurseday"
    }
    else if(weekDayNum === 5){
      weekDay = "Friday"
    }
    else{
      weekDay = "Saturday"
    }
    var output = (<div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <h1 className='text-center'>
                  {weekDay} {time.getDate()}-{time.getMonth()+1}-{time.getFullYear()}</h1>
            </div>
        </div>
    </div>);

    return output; //return JSX 
}
root.render(showCurrentTime(time));