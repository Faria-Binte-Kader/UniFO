import React from 'react'
import '../../App.css'
import  {useState, useEffect} from 'react';
import HomeStudent from './HomeStudent.js'
import HomeUniversity from './HomeUniversity.js'


function HomeUser() {
   // const data=  localStorage.getItem('usermail');
    const type=  localStorage.getItem('usertype');
    const [student, setStudent] = useState(true);

    useEffect(() => {
       if( localStorage.getItem('usertype')==='student')
       {
         setStudent(true);
       }
       else if( localStorage.getItem('usertype')==='university-admin')
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