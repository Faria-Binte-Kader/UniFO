import React from 'react'
import '../../App.css'
import  {useState, useEffect} from 'react';
import HomeStudent from './HomeStudent.js'
import HomeUniversity from './HomeUniversity.js'


function HomeUser() {
    const data=  localStorage.getItem('usermail');
    const type=  localStorage.getItem('usertype');
    const [student, setStudent] = useState(true);

    useEffect(() => {
       if(type=='student')
       {
         setStudent(true);
       }
       else if(type=='university-admin')
       { 
           setStudent(false);
       }
      console.log(type);
    }, []);
    if(student)
    {return( <><HomeStudent/> </>);}
    else
    {return( <><HomeUniversity/> </>);}
   
}

export default HomeUser